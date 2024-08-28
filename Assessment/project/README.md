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

### Screenshots

Below are screenshots showing different parts of the application:

![blog](https://github.com/user-attachments/assets/aba4b0eb-7ac3-4799-95cb-471ee7848c92)
![detail_page1](https://github.com/user-attachments/assets/cb3f1e3b-9904-47a6-b48a-911c3958d262)
![detail_page2](https://github.com/user-attachments/assets/253313e5-d13f-4d4c-ade9-7b1708420831)
![landing](https://github.com/user-attachments/assets/2afbc8e1-7963-4803-8af4-f426e3126301)
![login](https://github.com/user-attachments/assets/e091972e-344f-4d5a-aa86-4a8ce277358d)

### Deployment

Deploy this application using Vercel by linking your GitHub repository. Vercel automatically deploys the project and provides a live URL.

### Contributing

To contribute, fork the repository and submit a pull request.

### License

This project is open-source and available under the MIT License.
