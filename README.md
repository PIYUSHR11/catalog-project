# Product Catalog

A responsive multicategory product catalog built with **Next.js**, **Material-UI (MUI)**, and **TypeScript**.

## Features

- 📱 **Responsive Design**: Optimized for PC, tablet, and mobile
- 🎨 **Material-UI Styling**: Pre-built components with professional theming
- 🔍 **Category Filtering**: Filter products by category
- ⚡ **Next.js Optimization**: Fast performance with built-in routing and SSR
- 📦 **TypeScript**: Full type safety

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: Material-UI (MUI)
- **Styling**: CSS Modules + MUI's `sx` prop
- **Language**: TypeScript
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd catalog-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your products to `src/data/products.json`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/              # Next.js app directory (routes, layouts)
├── components/       # Reusable React components
├── data/            # JSON data files
├── hooks/           # Custom React hooks
├── styles/          # CSS modules
├── theme/           # MUI theme configuration
└── types/           # TypeScript interfaces
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel (recommended):

```bash
npm install -g vercel
vercel
```

## License

MIT License