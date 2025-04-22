
# Meme Directory — Next.js 14 + HeroUI v2

A modern responsive meme directory app with editable meme entries, built using **Next.js 14**, **HeroUI**, and **Tailwind CSS**.

🔗 [Live Demo on Railway](https://your-app-url.railway.app)

---

## 🛠 Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/docs)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Framer Motion](https://www.framer.com/motion/)
- [localStorage + cookies (for persistence)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## ✨ Features

✅ Two views:
- **Table** view of memes with edit modal  
- **Card grid** view with images, likes and links

✅ Dark / Light theme switcher

✅ Meme editing in modal (title, image URL, likes)

✅ Meme data persistence using `localStorage`

✅ Responsive layout

✅ Deployed on [Railway](https://railway.app)

---

## 📦 Installation

```bash
git clone https://github.com/ivan-andriichak/meme_directory.git
cd meme-directory
npm install
```

---

## 🚀 Run Locally

```bash
npm run dev
```

App will be available at [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Project Structure

```
.
├── app
│   ├── layout.tsx        // Global layout (theme, navbar)
│   ├── page.tsx          // Default route (redirect or intro)
│   ├── table/page.tsx    // Table view of memes
│   ├── list/page.tsx     // Grid view of memes
├── components
│   ├── NavbarLayout.tsx
│   ├── MemeTable.tsx
│   ├── MemeCardGrid.tsx
│   ├── EditMemeModal.tsx
├── contexts
│   └── MemeContext.tsx
├── data
│   └── memes.ts          // Initial memes
├── utils
│   ├── validation.ts     // Meme field validation
│   └── storage.ts        // localStorage/cookie persistence
```
