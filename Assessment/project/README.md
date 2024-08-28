# Blog Application

This is a simple blog application built with Next.js, TypeScript, and Tailwind CSS. The app uses the new `app/` directory structure of Next.js for routing and features a blog listing page and a detailed blog page.

## Features

- TypeScript: Provides static type checking to catch errors early and improve development efficiency.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Next.js (App Router): Uses the latest routing features of Next.js for cleaner and more modular code.
- Responsive Design: Fully responsive layout for different screen sizes.
- Dynamic Routing: Blog pages are generated dynamically based on their unique ID.
- API Integration: Fetches blog data from an external API.
- Image Optimization: Uses Next.js's built-in Image component for optimized images.

## Project Structure

The project is organized with the following structure:

- The `app/` directory contains the main pages and layout components. The `blog/[id]/` directory is for individual blog detail pages.
- The `public/` directory is for public assets.
- The `styles/` directory contains global styles.
- The `types/` directory defines TypeScript types used throughout the project.
- The `next.config.mjs` file contains the configuration for Next.js.
- The `tsconfig.json` file is for TypeScript configuration.

### Installation

To get started, clone the repository and install the dependencies. After that, run the development server and open it in your browser.

### Configuration

The Next.js configuration includes allowed external image domains. Ensure that you configure your allowed domains for images correctly.

### Folder Structure

Key parts of the project structure include:

- `app/blog/[id]/page.tsx` for fetching and displaying blog details.
- `app/layout.tsx` for the global layout of the application.
- `types/index.ts` for defining TypeScript types for blog and author objects.
- `next.config.mjs` for Next.js configuration, including image domains.

### Blog Types

The blog data structure is defined in the `types/index.ts` file. This includes fields for author information, blog content, tags, and metadata.

### API Usage

This application expects blog data from an external API. Ensure your API is correctly configured and returns the expected JSON structure.

### Deployment

Deploy this application using Vercel by linking your GitHub repository. Vercel automatically deploys the project and provides a live URL.

### Contributing

To contribute, fork the repository and submit a pull request.

### License

This project is open-source and available under the MIT License.
