# ForgeDCode Bakery & Sweets Website Showcase

> **"Your business deserves a website as unique as your brand."**  
> A high-impact, client-ready sales showcase built for **ForgeDCode** to present ten fundamentally distinct, responsive website concepts for Indian sweet houses, artisan bakeries, bespoke cake ateliers, luxury patisseries, bean-to-bar chocolatiers, and roastery cafés.

---

## 🌟 The 10 Website Concepts

Each of the ten websites in this showcase represents an independent business archetype with its own information architecture, layout geometry, typography, color palette, interactive tools, and mobile experience:

| # | Concept Name | Archetype | Route | Key Interactive Feature |
| :- | :--- | :--- | :--- | :--- |
| **01** | **Maharaja Mithai House** | Luxury Indian Heritage Editorial | `/demos/maharaja` | Vintage ledger wedding trousseau requisition form |
| **02** | **Crumb & Co.** | Minimalist Artisan Sourdough Bakery & Journal | `/demos/crumb` | Live oven pull timestamp (`07:15 AM`) & chalkboard inspector |
| **03** | **Sugar Rush Bakery** | Playful Maximalist & Fast Retail | `/demos/sugar-rush` | 4-step live birthday cake builder with real-time price ticker |
| **04** | **Maison Éclair** | Cinematic Haute Pâtisserie | `/demos/maison` | Single-origin cacao terroir dossier & 12-seat tasting salon reservation |
| **05** | **Chennai Sweet Corner** | High-Conversion Local Mithai Shop | `/demos/chennai-sweet-corner` | 250g / 500g / 1kg weight toggles & floating WhatsApp checkout bag |
| **06** | **The Cake Atelier** | Bespoke Fine Art Wedding Cake Studio | `/demos/cake-atelier` | 6-step interactive bespoke cake design journey & inquiry form |
| **07** | **Oven & Hearth** | Rustic Nostalgic Neighborhood Bakery (Est. 1964) | `/demos/oven-hearth` | 3-chapter kiln story & "Save My Loaf" counter reservation form |
| **08** | **Cocoa Craft** | Single-Origin Chocolate & E-Commerce | `/demos/cocoa-craft` | Cacao % filters, product detail modal & working slide-out cart |
| **09** | **Mithai & Moments** | Festive Sweets & Corporate Gifting | `/demos/mithai-moments` | Dynamic 3-step Gift Finder & B2B corporate bulk discount calculator |
| **10** | **Butter & Bloom Café** | Contemporary Roastery & Bakery Café | `/demos/butter-bloom` | Coffee + Pastry sommelier pairings & veranda table reservation |

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework:** React 18
- **Build Tool:** Vite 5 (Sub-second HMR & optimized production bundling)
- **Language:** TypeScript 5 (Strict type checking)
- **Styling:** Tailwind CSS 3 with custom brand themes
- **Routing:** React Router DOM 6 (Full client-side SPA routing with Cloudflare Static Assets fallback)
- **Icons:** Lucide React
- **Hosting Target:** Cloudflare Workers with Static Assets (`wrangler 4.x`)
- **Presentation Controls:** Built-in floating toolbar with device viewport switcher (`Desktop`, `Tablet`, `Mobile`) and quick-jump demo selector.

---

## 💻 Local Installation & Development

### Prerequisites
- **Node.js**: `v18.0.0` or higher (`v24.x` recommended)
- **npm**: `v9.0.0` or higher (`v12.x` recommended)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The development server will start at `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
```
This runs TypeScript type checking (`tsc -b`) and generates the optimized production bundle in the `dist/` directory.

### 4. Preview the Production Build Locally
You can preview the build using either Vite or Wrangler:

- **Vite preview:**
  ```bash
  npm run preview
  ```
  Runs at `http://localhost:5173/`.

- **Cloudflare Wrangler local runtime preview:**
  ```bash
  npm run preview:cf
  ```
  Runs at `http://localhost:8787/` emulating the Cloudflare Workers Static Assets environment with SPA fallback.

---

## ☁️ Cloudflare Workers Deployment

This project is configured to deploy directly to **Cloudflare Workers with Static Assets** using `wrangler.jsonc`.

### Configuration (`wrangler.jsonc`)
```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "forgedcode-bakery-showcase",
  "compatibility_date": "2024-09-23",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

### Deploying via Wrangler CLI
1. Log in to your Cloudflare account:
   ```bash
   npx wrangler login
   ```
2. Build the project and deploy:
   ```bash
   npm run build
   npm run deploy
   ```
3. Wrangler will output your live URL:
   `https://forgedcode-bakery-showcase.<your-subdomain>.workers.dev`

---

## 🐙 GitHub Repository Setup

To publish this showcase to GitHub:

### 1. Initialize Git & Add Files
```bash
# Initialize git repository
git init -b main

# Add all project files (node_modules and dist are excluded by .gitignore)
git add .

# Create the initial commit
git commit -m "feat: initial commit of ForgeDCode 10 bakery and sweets website showcase"
```

### 2. Create the Repository on GitHub
1. Log in to [GitHub](https://github.com/).
2. Click **New Repository**.
3. Name the repository: `forgedcode-bakery-showcase`.
4. Choose **Public** (if you want prospective clients to review the clean codebase) or **Private** (Cloudflare can deploy from both).
5. Do **not** initialize with a README, .gitignore, or license (these already exist in the project).
6. Click **Create repository**.

### 3. Push Local Code to GitHub
```bash
# Link your remote GitHub repository
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/forgedcode-bakery-showcase.git

# Push code to main
git push -u origin main
```

---

## 🚀 Cloudflare Git Integration (Automated Deployments)

To set up continuous automated deployments whenever you push to GitHub:

1. Sign in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation, go to **Compute (Workers) > Workers & Pages**.
3. Click **Create** > **Connect to Git**.
4. Select **GitHub** and authorize Cloudflare to access the `forgedcode-bakery-showcase` repository.
5. Select the repository and the `main` production branch.
6. Configure the build settings:
   - **Framework preset:** `None` / `Vite`
   - **Build command:** `npm run build`
   - **Deploy command:** *(handled automatically via Wrangler Static Assets)*
   - **Output directory / Assets directory:** `dist`
7. Click **Save and Deploy**.
8. Cloudflare will execute the build and provide an HTTPS production URL (e.g. `https://forgedcode-bakery-showcase.<subdomain>.workers.dev`).

### Continuous Deployment Workflow
- Every `git push origin main` triggers an automatic build and deployment.
- Pull requests can generate preview deployments to test new concepts before merging.
- Rollbacks can be performed with one click from the Cloudflare Dashboard under **Deployments**.

---

## 🎨 How to Customize Images & Business Details

### 1. Changing Contact & WhatsApp Information
- **Global WhatsApp & Brand Config:** Located in `src/data/demo-config.ts`.
  Update `WHATSAPP_NUMBER` and default inquiry message templates.
- **Showcase Metadata:** Located in `src/data/showcase-data.ts`.
  Update demo titles, categories, color swatches, and feature tags.

### 2. Updating Product Data & Photography
- **Common Product Catalog:** Located in `src/data/products.ts`.
- **Individual Demo Catalogs:**
  - Concept 01 (Maharaja): `src/demos/maharaja/MaharajaCatalogue.tsx`
  - Concept 02 (Crumb & Co.): `src/demos/crumb/CrumbDailyBoard.tsx`
  - Concept 05 (Chennai Sweet Corner): `src/demos/chennai-sweet-corner/ChennaiProducts.tsx`
  - Concept 08 (Cocoa Craft): `src/demos/cocoa-craft/CocoaCatalogue.tsx`
  - Concept 09 (Mithai & Moments): `src/demos/mithai-moments/MomentsGiftFinder.tsx`

---

## 📂 Repository Structure

```
├── .gitattributes              # Line endings and binary file declarations
├── .gitignore                  # Clean exclusions (node_modules, dist, .wrangler, .env)
├── index.html                  # HTML entrypoint with viewport & fonts
├── package.json                # Scripts & dependencies
├── package-lock.json           # Deterministic lockfile
├── postcss.config.js           # PostCSS Tailwind config
├── public/                     # Static public assets
├── src/
│   ├── app/
│   │   ├── App.tsx             # Central router & 10 demo route definitions
│   │   └── ShowcaseLanding.tsx # ForgeDCode agency portfolio landing page
│   ├── components/             # Reusable UI & presentation toolbar
│   │   ├── DemoLayout.tsx      # Viewport simulation container
│   │   └── PresentationToolbar.tsx # Top demo switcher & device toggles
│   ├── data/                   # Showcase metadata & business data
│   │   ├── demo-config.ts      # Global agency brand & WhatsApp settings
│   │   ├── products.ts         # Shared confectionery & bakery items
│   │   └── showcase-data.ts    # 10 concepts metadata & filter tags
│   ├── demos/                  # 10 Independent Modular Website Architectures
│   │   ├── butter-bloom/       # Concept 10: Butter & Bloom Café
│   │   ├── cake-atelier/       # Concept 06: The Cake Atelier
│   │   ├── chennai-sweet-corner/ # Concept 05: Chennai Sweet Corner
│   │   ├── cocoa-craft/        # Concept 08: Cocoa Craft
│   │   ├── crumb/              # Concept 02: Crumb & Co.
│   │   ├── maharaja/           # Concept 01: Maharaja Mithai House
│   │   ├── maison/             # Concept 04: Maison Éclair
│   │   ├── mithai-moments/     # Concept 09: Mithai & Moments
│   │   ├── oven-hearth/        # Concept 07: Oven & Hearth
│   │   └── sugar-rush/         # Concept 03: Sugar Rush Bakery
│   ├── styles/                 # Global styles & Tailwind imports
│   └── main.tsx                # React root mount
├── tailwind.config.js          # Tailwind theme & animation extensions
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── wrangler.jsonc              # Cloudflare Workers Static Assets configuration
```

---

## ✅ Release Checklist for New Versions

- [ ] Run `npm run build` and ensure 0 TypeScript or bundling errors.
- [ ] Run `npm run preview:cf` to verify SPA fallback on all 10 demo routes.
- [ ] Verify WhatsApp links generate correct pre-formatted messages.
- [ ] Verify that no API keys or personal credentials exist in source files.
- [ ] Check responsive layout on Mobile (390px), Tablet (768px), and Desktop.
- [ ] Commit changes: `git commit -m "feat: your update message"`.
- [ ] Push to GitHub: `git push origin main`.
- [ ] Verify build status in Cloudflare Workers & Pages dashboard.
