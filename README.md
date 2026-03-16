# 🧪 Vite + Google Apps Script Starter Template

[![Use this template](https://img.shields.io/badge/Use_this_template-blue?logo=github&style=for-the-badge)](https://github.com/michaelos02/VITE-GAS-Starter/generate)

This template provides a clean and modern development setup for building **Google Apps Script Web Apps** using:

- ⚡️ [Vite](https://vitejs.dev/) for bundling JS & CSS  
- 🧩 ES Modules and modern JS tooling  
- 🎯 `google.script.run` simulation for local dev  
- 🚀 `CLASP` for deploying to Google Apps Script  
- 🧑‍💻 Google IDX compatibility  

---

## 🚀 Getting Started

### ✅ Option 1 (Recommended): Create a New Repo from This Template

1. **Use this template** on GitHub:
   - Click the green **"Use this template"** button above.
   - Create your own repo (e.g., `my-gas-project`).

2. **Import into Google IDX**:
   - Go to [https://idx.dev](https://idx.dev).
   - Click **"New Workspace" → "Import Repo"**.
   - Paste your new GitHub repo URL.
   - Name your workspace (e.g., `customer-portal`).

3. **Initialize your project**:
   ```bash
   npm install
   npx clasp create --title "My GAS Web App" --type webapp --rootDir gas
   npm run push
   ```
   > 💡 If you're working in **Google Project IDX**, you'll need to log in to CLASP using a workaround — [see CLASP Login Workaround in Project IDX](#-clasp-login-workaround-in-project-idx) below.

4. **Deploy** your web app:

   ```bash
   npx clasp open
   ```

   * In the Apps Script editor, go to **Deploy > Manage Deployments**.
   * Deploy as a **Web App**.

---

### 🧠 Option 2 (Advanced): Clone and Customize Locally in IDX

1. Create a blank workspace in IDX.

2. Run this in the terminal:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git .
   rm -rf .git
   git init
   git remote add origin https://github.com/YOUR-USERNAME/NEW-REPO.git
   git add .
   git commit -m "Initial commit from template"
   git push -u origin main
   ```

3. Then continue setup:

   ```bash
   npm install
   npx clasp create --title "My GAS Web App" --type webapp --rootDir gas
   npm run push
   ```

---

## 🛠 Development Workflow

* Edit frontend code in `src/`
* Run `npm run dev` to test locally (uses mocked `google.script.run`)
* Run `npm run push` to:

  * Build via Vite
  * Copy bundled HTML to `gas/`
  * Push code to Apps Script using CLASP

---

## 📁 Project Structure

```
📁 src/              → Your modern JS + CSS source code  
📁 gas/              → Deployed GAS code (Apps Script HTML service)  
├── Code.gs  
├── Index.html  
├── appsscript.json  
📄 vite.config.js    → Vite build configuration  
📄 package.json      → Project scripts and dependencies  
```

---

## 📦 Scripts

| Command         | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Run Vite dev server with mock API   |
| `npm run build` | Build front-end with Vite           |
| `npm run push`  | Build + copy to `gas/` + clasp push |

---

## 🔐 CLASP Login Workaround in Project IDX

If you’re using this inside **Google Project IDX**, follow these steps to authenticate CLASP:

1. Open the terminal and run:

   ```bash
   clasp login
   ```
2. Copy the URL printed in the terminal.
3. Paste it into an **Incognito** browser window.
4. Complete the OAuth process (expect an error page — that's normal).
5. Copy the final URL from your browser's address bar.
6. In a **new terminal** in IDX, run:

   ```bash
   curl "<paste-final-url-here>"
   ```

---

## ⚠️ Known Issues

* You may need to update the `vite.config.js` file to set the correct dev server base or HTML output path for your project.

---

## 📬 Contact & Motivation

This project is all about creating a simple, reusable **starter template** for Google Apps Script development with modern tooling. I chose **Vite** for its scalability and ease of use. Most existing templates were too complex or required steep learning curves.

I was already familiar with **CLASP** from earlier attempts in VSCode, so combining that with Vite and a local dev simulation of `google.script.run` made for a perfect balance.

If you have questions or want to contribute, feel free to reach out to me:  
📧 [michael@mroresolutions.rocks](mailto:michael@mroresolutions.rocks)

---

## 🙌 License

MIT — use freely for commercial or personal GAS projects!
