# Glorious Adjoba — Website

**Glorious Adjoba Events & Short Let Apartments, Kasoa, Ghana**

A clean, warm-toned static website showcasing the 4-bedroom short-let apartment and event centre. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step required.

---

## Project structure

```
glorious-adjoba/
├── index.html        ← Main page
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← Nav, animations, form handler
├── images/           ← Drop your photos here
└── README.md
```

---

## Before going live — checklist

Open `index.html` and replace the following placeholders:

| Placeholder | Replace with |
|---|---|
| `https://wa.me/00000000000` | Your WhatsApp number, e.g. `https://wa.me/233201234567` |
| `hello@gloriousadjoba.com` | Your real email address |
| `https://formspree.io/f/YOUR_FORM_ID` | Your Formspree form ID (see below) |
| Airbnb `href` link | Your actual Airbnb listing URL |
| Booking.com `href` link | Your actual Booking.com listing URL |
| Rate prices (GHS 600, 3500, 11000) | Your actual rates |

---

## Setting up the contact form (Formspree — free)

1. Go to https://formspree.io and sign up (free)
2. Create a new form — set the email to receive submissions
3. Copy your Form ID (looks like `xaybzrgk`)
4. In `index.html`, find this line:
   ```html
   <form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```
   Replace `YOUR_FORM_ID` with your real ID

---

## Adding your photos

1. Drop your property photos into the `images/` folder
2. In `index.html`, add `<img>` tags in the hero or section areas
3. Recommended sizes: hero background ~1920×1080px, cards ~800×600px

---

## Deploying to GitHub Pages (step by step)

### Step 1 — Install Git
If you don't have Git: https://git-scm.com/downloads

### Step 2 — Create a GitHub account
Go to https://github.com and sign up if you don't have an account.

### Step 3 — Create a new repository
1. Click the **+** icon → **New repository**
2. Name it: `glorious-adjoba` (or any name you like)
3. Set to **Public**
4. Do NOT initialise with README (you already have files)
5. Click **Create repository**

### Step 4 — Open the project in VS Code
1. Open VS Code
2. File → Open Folder → select the `glorious-adjoba` folder

### Step 5 — Push to GitHub (using VS Code terminal)
Open the terminal in VS Code (Ctrl + ` or Terminal → New Terminal), then run:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/glorious-adjoba.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 6 — Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Click **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/glorious-adjoba/`

It may take 1–2 minutes to deploy the first time.

---

## Making future edits

1. Edit files in VS Code
2. Open terminal and run:
```bash
git add .
git commit -m "Updated rates" 
git push
```
GitHub Pages will automatically update within a minute or two.

---

## Custom domain (optional)

If you buy a domain (e.g. `gloriousadjoba.com` from Namecheap or GoDaddy):
1. In your repo, go to Settings → Pages
2. Enter your custom domain
3. Update the DNS settings at your domain registrar to point to GitHub Pages
   (GitHub provides instructions at that step)

---

## Support

Built for Glorious Adjoba, Kasoa, Ghana.
