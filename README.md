# StoreXpress

StoreXpress is a modern e-commerce web application built with Next.js 15, TypeScript, and React. It features dynamic product pages, SEO optimization, fast client-side navigation, and a clean, responsive UI.

## Features

-   Product listing with categories
-   Single product pages with dynamic meta data for SEO
-   Bookmarking products
-   Modal sidebar and search
-   Pagination
-   Spinners/loaders for async actions
-   Responsive design

## Tech Stack

-   Next.js 15
-   React
-   TypeScript
-   Tailwind CSS
-   React Query

## Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone <your-repo-url>
    cd storexpress
    ```
2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```
3. Run the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
eslint.config.mjs
next-env.d.ts
next.config.ts
note.txt
package.json
postcss.config.mjs
README.md
tsconfig.json
public/
src/
  types.ts
  app/
    layout.tsx
    page.tsx
    products/[id]/page.tsx
    providers/QueryProvider.tsx
  components/
  data/
  lib/
  store/
  utils/
```

## Customization

-   Update SEO meta tags in `src/app/products/[id]/page.tsx` for dynamic product SEO.
-   Modify global styles in `src/app/globals.css`.
-   Add new components in `src/components/`.

<!-- ## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT -->
