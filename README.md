# Named Entity Linking Platform

This is a web-based Named Entity Linking Platform, built with React and Vite. It provides a modern development setup with ESLint, Prettier, Tailwind CSS, and TypeScript for a robust and efficient workflow.

## Features

- **React 18**: A powerful JavaScript library for building user interfaces.
- **Vite**: A fast and opinionated build tool for modern web projects.
- **TypeScript**: Adds static typing to JavaScript for improved code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **ESLint**: For linting and code style enforcement.
- **Lucide React**: A collection of beautiful and customizable open-source icons.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd named-entity-linking-platform
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

This will typically start the application at `http://localhost:5173` (or another available port).

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

This command bundles the application into the `dist` directory, ready for deployment.

### Linting

To run ESLint for code linting, use:

```bash
npm run lint
# or
yarn lint
```

### Preview Production Build

To preview the production build locally, run:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Lucide React](https://lucide.dev/icons/)

## License

This project is open-sourced under the MIT License. See the `LICENSE` file for more details. (Note: A `LICENSE` file is not included in the provided files, please add one if necessary.)


