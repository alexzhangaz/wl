import { describe, expect, it } from "vitest";

describe("Resend API", () => {
  it("should validate RESEND_API_KEY is set", () => {
    const apiKey = process.env.RESEND_API_KEY;
    expect(apiKey).toBeDefined();
    expect(apiKey).toBeTruthy();
    expect(apiKey).toMatch(/^re_/); // Resend keys start with 're_'
  });

  it("should have valid API key format", () => {
    const apiKey = process.env.RESEND_API_KEY;
    // Resend API keys are typically in format: re_xxxxxxxxxxxx
    expect(apiKey).toMatch(/^re_[a-zA-Z0-9_]+$/);
  });
});
