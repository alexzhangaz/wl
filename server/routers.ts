import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  inquiries: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        message: z.string().min(10, "Message must be at least 10 characters"),
      }))
      .mutation(async ({ input }) => {
        try {
          if (!resend) {
            console.warn(
              "[inquiries] RESEND_API_KEY not set; skipping email send (local dev)"
            );
            return {
              success: true,
              message: "Inquiry submitted (email not sent: no API key)",
            };
          }
          // Send email to White Lotus Software
          const emailResult = await resend.emails.send({
            from: "noreply@whitelotus.space",
            to: "info@whitelotus.space",
            subject: `New Inquiry from ${input.name}`,
            html: `
              <h2>New Inquiry Received</h2>
              <p><strong>Name:</strong> ${input.name}</p>
              <p><strong>Email:</strong> ${input.email}</p>
              <p><strong>Message:</strong></p>
              <p>${input.message.replace(/\n/g, "<br />")}</p>
              <hr />
              <p><em>This email was sent from the White Lotus Software website contact form.</em></p>
            `,
          });

          if (emailResult.error) {
            console.error("Resend error:", emailResult.error);
            throw new Error("Failed to send email");
          }

          // Also send notification to owner
          await notifyOwner({
            title: "New Inquiry Received",
            content: `Name: ${input.name}\nEmail: ${input.email}\nMessage: ${input.message}`,
          });

          return {
            success: true,
            message: "Inquiry submitted successfully",
          };
        } catch (error) {
          console.error("Failed to submit inquiry:", error);
          throw new Error("Failed to submit inquiry");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
