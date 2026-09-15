# Deploying goldenoceanindustrial.com — free, start to finish

> Domain registered at **Spaceship**. Hosting on **Cloudflare Pages** (free). Form via **Formspree** or **Web3Forms** (free).
> **Total cost: CAD $0** on top of the domain you already own.
> Time: about 30 minutes.

---

## ⚠️ Read this first — do not break your email

Your email is already working on this domain. **Email is controlled by DNS records** (MX, SPF, DKIM, DMARC), and the most common way people break company email is by moving DNS to a new provider and not copying those records across.

There are two routes. **Route A is safer and I recommend it.**

| | **Route A — leave DNS at Spaceship** ← recommended | Route B — move DNS to Cloudflare |
|---|---|---|
| What you do | Host the site on Cloudflare Pages, add **two records** at Spaceship | Change nameservers to Cloudflare, re-create every record |
| Email risk | **None — you never touch the mail records** | Real. Miss one record and mail stops |
| Extra benefits | None needed | Cloudflare analytics, caching controls, easier future changes |

Unless you have a reason to want Cloudflare's DNS features, **take Route A.** You can always migrate later, deliberately, when nothing is on fire.

> **If you do choose Route B:** before switching nameservers, screenshot every existing DNS record at Spaceship — especially MX, and the TXT records for SPF, DKIM and DMARC. Re-create them all in Cloudflare *first*, then switch. Verify mail still arrives before you consider it done.

---

## Step 1 — Put the site on GitHub

Cloudflare Pages deploys from a Git repository, and it redeploys automatically whenever you change a file.

1. Create a free account at [github.com](https://github.com) if you don't have one
2. Create a new **public** repository called `goldenocean-website`
3. Upload `index.html` — either drag it into the browser upload, or:

```bash
git init
git add index.html
git commit -m "Company website"
git branch -M main
git remote add origin https://github.com/Nanorice/goi-website.git
git push -u origin main
```

> Public is fine — there is nothing confidential in the page. If you'd rather keep it private, Cloudflare Pages supports private repos on the free plan too.

---

## Step 2 — Connect Cloudflare Pages

1. Sign up free at [dash.cloudflare.com](https://dash.cloudflare.com)
2. **Workers & Pages → Create → Pages → Connect to Git**
3. Authorise GitHub, pick `goldenocean-website`
4. Build settings — leave everything **empty**:
   - Framework preset: **None**
   - Build command: *(blank)*
   - Build output directory: `/`
5. **Save and Deploy**

You'll get a live URL like `goldenocean-website.pages.dev` within a minute. **Open it and check the page works before going any further.**

---

## Step 3 — Point your domain at it

In Cloudflare Pages: **your project → Custom domains → Set up a custom domain →** enter `goldenoceanindustrial.com`.

Cloudflare will tell you it can't verify the domain because DNS lives at Spaceship. That's expected. It will show you the record to add.

### At Spaceship — add these two records

Spaceship → your domain → **Advanced DNS**:

| Type | Host / Name | Value | Notes |
|---|---|---|---|
| CNAME | `www` | `goldenocean-website.pages.dev` | Use *your* actual pages.dev address |
| CNAME | `@` | `goldenocean-website.pages.dev` | If Spaceship rejects CNAME on the root, use **ALIAS** or **ANAME** instead — same thing, most registrars support one of them |

> **If the root domain won't take a CNAME/ALIAS at all:** set up `www.goldenoceanindustrial.com` as the custom domain instead, and add a redirect from the root. Not ideal, but functional. Most modern registrars including Spaceship support CNAME flattening on the root — try `@` first.

**Do not touch any MX or TXT record while you're in there.** Those are your email.

Propagation takes anywhere from a few minutes to a couple of hours. Cloudflare issues the HTTPS certificate automatically once it sees the record.

---

## Step 4 — Make the quote form actually work

The form currently posts to a placeholder and **will not deliver anything** until you do this.

### Option A — Formspree (best known)

1. Sign up free at [formspree.io](https://formspree.io)
2. **New Form** → set the destination to `sales@goldenoceanindustrial.com`
3. Copy the endpoint it gives you — looks like `https://formspree.io/f/xdorwqkb`
4. In `index.html`, find this line:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your real ID. Commit and push — Cloudflare redeploys automatically.

**Free tier: 50 submissions per month.** Ample for our volume.

### Option B — Web3Forms (no account needed)

1. Go to [web3forms.com](https://web3forms.com), enter `sales@goldenoceanindustrial.com`, get an access key emailed to you
2. Change the form tag to:

```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="YOUR-ACCESS-KEY-HERE">
```

**Free tier: 250 submissions per month.**

> **Then test it.** Submit the form yourself and confirm the message arrives at `sales@`. A silent form is worse than no form — the visitor thinks they've contacted you and you never know they existed.

The page already includes a hidden `_gotcha` honeypot field, which both services use to filter bots. Leave it in place.

---

## Step 5 — Before you tell anyone about it

- [ ] Page loads at `https://goldenoceanindustrial.com` with a padlock
- [ ] Test on a phone — the layout is responsive but check it yourself
- [ ] **Form submits and the email actually arrives**
- [ ] `sales@goldenoceanindustrial.com` in the footer is live and monitored
- [ ] **Email still works** — send yourself one from an outside address
- [ ] Read the page once more against the compliance rules below

---

## ⚠️ Compliance rules built into this page — keep them

The page has been deliberately written to stay inside what we can currently evidence. Three things to preserve:

**1. No Kosher claim.** The manufacturer's kosher certificate **expired in January 2026**. It is not on the page and must not be added until renewed.

**2. No ETO-free claim.** The ethylene oxide test dates from **2022** and won't survive QA review. Not on the page. Don't add it.

**3. No customer, volume or track-record claims.** There are none on the page. Don't add testimonials, "trusted by" logos, or years-in-business language until they're true.

**On the certification logos you asked for.** The section is built for them — swap each `<span class="cert-mark">` for an `<img>` and it will lay out correctly. But **get written permission from Shenghai first.** The BRCGS, NSF and FDA marks are licensed to the certificate holder — the manufacturer — not to us. Using them without authorisation is a real problem if noticed, and the page already states clearly that the certifications are *"held by our manufacturing partner in respect of its production facility"*, which keeps us accurate either way.

**This is question 13 on the Shenghai list** (`项目说明_中文版.md` §1-D) — ask for the written scope statement and logo permission at the same time.

---

## Changing the site later

Edit `index.html` on GitHub — click the file, click the pencil, commit. Cloudflare redeploys in under a minute. No build step, no framework, one file.

---

## What this costs

| Item | Cost |
|---|---|
| Cloudflare Pages hosting | **$0** — unlimited sites, 500 builds/month |
| GitHub repository | **$0** |
| Formspree or Web3Forms | **$0** |
| HTTPS certificate | **$0** — automatic |
| Domain | Already owned |
| **Total** | **$0** |
