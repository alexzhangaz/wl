# 在 Render.com 部署 (wl)

## 1. 登录 Render

- 打开 https://render.com ，用 **journey6062@gmail.com** 登录（或注册后登录）。

## 2. 连接 GitHub 仓库

- 在 Render 控制台：**Dashboard** → **New** → **Web Service**。
- 在 “Connect a repository” 里选择 **GitHub**，若未授权则先授权 Render 访问 GitHub。
- 在仓库列表中选择 **alexzhangaz/wl**（若看不到，确认该账号/组织已授权 Render）。
- 连接后，Render 会读取仓库根目录的 **render.yaml** 自动填好构建与启动命令。

## 3. 环境变量（必填/推荐）

在 **Environment** 里为 **whlanding** 服务添加/检查以下变量（与 `render.yaml` 中一致即可）：

| 变量名 | 说明 | 必填 |
|--------|------|------|
| `NODE_ENV` | 已由 render.yaml 设为 production | - |
| `DATABASE_URL` | MySQL 连接串（若用数据库） | 若用 DB |
| `JWT_SECRET` | 会话密钥，随机长字符串 | 建议 |
| `RESEND_API_KEY` | Resend 发信 API Key | 若发邮件 |
| `OAUTH_SERVER_URL` | OAuth 服务地址 | 若用登录 |
| `VITE_OAUTH_PORTAL_URL` | 前端 OAuth 门户 URL（构建时注入） | 若用登录 |
| `VITE_APP_ID` | 应用 ID（构建时注入） | 若用登录 |
| `OWNER_OPEN_ID` / `OWNER_NAME` | 所有者信息 | 按需 |

其余 `VITE_*`、`BUILT_IN_FORGE_*` 等按需在 Render 的 Environment 里添加，与本地 `.env` 一致即可。

## 4. 构建与运行

- **Build Command**：`pnpm install && pnpm build`（由 render.yaml 提供）。
- **Start Command**：`pnpm start`（由 render.yaml 提供）。
- 若 Render 未安装 pnpm，可在 Build Command 前加：`npm install -g pnpm`，或在其后台选择使用 pnpm 的 Node 环境。

## 5. 部署

- 保存设置后点击 **Deploy**；之后每次向 **alexzhangaz/wl** 的 `main` 分支推送，Render 会自动重新部署（若已开启 Auto-Deploy）。

---

**仓库地址**：https://github.com/alexzhangaz/wl  
**Render 需连接该仓库并部署 `main` 分支。**
