# StoreXpress

StoreXpress ([faosy-adebimpe/storexpress](https://github.com/faosy-adebimpe/storexpress)) is a modern, high-performance e-commerce web application built with Next.js 15, TypeScript, and React. It provides a seamless shopping experience with dynamic product pages, fast navigation, and robust SEO. The project demonstrates scalable architecture and modern frontend best practices.

**GitHub Repository:** [https://github.com/faosy-adebimpe/storexpress](https://github.com/faosy-adebimpe/storexpress)

## Live Demo

[View StoreXpress Live](https://storexpress.vercel.app/)

Copyable link: `https://storexpress.vercel.app/`

## Features

-   Product listing with categories
-   Single product pages with dynamic meta data for SEO
-   Bookmarking products
-   Modal sidebar and search
-   Pagination
-   Spinners/loaders for async actions
-   Responsive design
-   Fast navigation
-   Optimized images

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

### Installation & Running Locally

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/faosy-adebimpe/storexpress.git
    cd storexpress
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```sh
    npm run dev
    # or
    yarn dev
    ```

4.  **Open** [http://localhost:3000](http://localhost:3000) **in your browser.**

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

## Design Decisions, Optimizations & Trade-offs

-   **Next.js App Router**: Chosen for its file-based routing and server-side rendering capabilities, improving SEO and performance.
-   **React Query**: Used for efficient data fetching, caching, and state management, reducing redundant network requests and improving UX.
-   **Tailwind CSS**: Enables rapid UI development and consistent styling.
-   **Dynamic SEO**: Product pages generate meta tags based on product data for better search engine visibility.
-   **Optimized Images**: Utilizes Next.js `Image` component for responsive, fast-loading images.
-   **Trade-offs**: Some features (e.g., advanced filtering, payment integration) are left out for simplicity and focus on core e-commerce functionality.

## SEO Implementation

-   **Dynamic Meta Tags**: The single product page (`src/app/products/[id]/page.tsx`) uses `next/head` to inject meta tags (title, description, Open Graph, keywords, etc.) based on product data.
-   **Static Meta Tags**: General pages include static meta tags for site-wide SEO.
-   **Server-side Rendering**: Next.js SSR ensures search engines can crawl and index content efficiently.

## Customization

-   Update SEO meta tags in `src/app/products/[id]/page.tsx` for dynamic product SEO.
-   Modify global styles in `src/app/globals.css`.
-   Add new components in `src/components/`.

<!-- ## License

MIT -->
