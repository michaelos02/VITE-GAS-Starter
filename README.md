Get started by customizing your environment (defined in the .idx/dev.nix file) with the tools and IDE extensions you'll need for your project!

Learn more at https://firebase.google.com/docs/studio/customize-workspace

### NOTES:
This project is all about creating a starter template for GAS projects.  It uses VITE and mock google-script-run for simulating the GAS API.
I wanted to start using a more advanced IDE than the GAS IDE however all my coding work is connected to creating solutions using Google Apps Script.
All the examples or templates I found were just WAY to involved OR requred a LOT of work to set up!!  I did not have time to learn all the ins and outs of Parcel or node or ... 
So this was my creation.  I decided on VITE for its "scalabiltiy" but also for its straightforward basic set up to ge started.  I was already famiialr with CLASP from my earlier attempts of using VSCode... those did not work out well!!
My goal for this starter/template was to keep it as simple as possible easy to reuse!
I do believe I have achieved my goal!
If you have any questions please reach out to me: michael@mroresolutions.rocks



### How to USE:
1. Clone the repo
1. Run npm install
1. Run npm run dev
1. Create a WEP APP in the gas folder using CLASP
    + use: npx clasp create --title "My Web App" --type webapp --rootDir gas

## CLASP Login Workaround in Project IDX
To log in to CLASP within Project IDX, follow these steps:

1. Open the terminal and run: `clasp login`
2. Copy the URL from the terminal output.
3. Paste the URL into an **Incognito** browser window.
4. Complete the OAuth process. You will likely land on an error page — this is expected.
5. Copy the final URL from your browser's address bar.
6. In a **new terminal window** in IDX, run:
   ```bash
   curl "<paste-final-url-here>"


### Issues:
1. Had to really work with the vite.config.js file.  Needed to add an entry to tell the dev server where to "start" from.

---
Awesome! Here’s a **complete `README.md`** for your Vite + Google Apps Script starter template, fully formatted with the **“Use this template” badge**, installation steps, and deployment instructions.

---

````markdown
# 🧪 Vite + Google Apps Script Starter Template

[![Use this template](https://img.shields.io/badge/Use_this_template-blue?logo=github&style=for-the-badge)](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME/generate)

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
   - Click the green **"Use this template"** button above
   - Create your own repo (e.g., `my-gas-project`)

2. **Import into Google IDX**:
   - Go to [https://idx.dev](https://idx.dev)
   - Click **"New Workspace" → "Import Repo"**
   - Paste your new GitHub repo URL
   - Name your workspace (e.g., `customer-portal`)

3. **Initialize your project**:
   ```bash
   npm install
   npx clasp create --title "My GAS Web App" --type webapp --rootDir gas
   npm run push
````

4. **Deploy** your web app:

   ```bash
   npx clasp open
   ```

   * In the Apps Script editor, go to **Deploy > Manage Deployments**
   * Deploy as a **Web App**

---

### 🧠 Option 2 (Advanced): Clone and Customize Locally in IDX

1. Create a blank workspace in IDX

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

## 🔐 Auth & Permissions

First time using CLASP? Run:

```bash
npx clasp login
```

Make sure you’ve enabled the **Google Apps Script API** in your Google Cloud project if needed.

---

## 🙌 License

MIT — use freely for commercial or personal GAS projects!

---

```

---

### ✅ Final Step

Just replace:
- `YOUR-USERNAME` with your GitHub username
- `YOUR-REPO-NAME` with your starter template’s repo name

Want me to prep this into an actual file you can commit?
```





