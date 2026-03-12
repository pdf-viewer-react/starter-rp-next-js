# React PDF Kit Starter Toolkit in Next.js with App Router and JavaScript

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/react-pdf-kit/starter-rp-nextjs-app-router-js)

Welcome to the React PDF Kit Starter Toolkit! This repository provides a comprehensive guide on integrating React PDF Kit with Next.js with App Router and JavaScript. It showcases the React PDF Viewer component can be integrated and rendered as part of a Next.js project.

## Table of Contents

- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

   ```bash
   git clone https://github.com/react-pdf-kit/starter-rp-nextjs-app-router-js.git
   cd starter-rp-nextjs-app-router-js
   ```

2. **Install Dependencies**: Install the necessary dependencies using npm, yarn, pnpm or bun.

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Example Project

This repository includes an example project to demonstrate the React PDF Kit in action.

1. **Start the Development Server**: Use the following command to start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   # or
   bun run dev
   ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal) to see the example project in action

### Using React PDF in the App Router

This example uses the Next.js App Router, which requires marking your PDF components as client components and disabling SSR because React PDF relies on browser APIs. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```jsx
"use client";
import {
  RPProvider,
  RPLayout,
  RPPages,
} from "@react-pdf-kit/viewer";

const AppPdfViewer = (props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
      {...providerProps}
    >
      {showToolbar ? (
        <RPLayout toolbar {...defaultLayoutProps}>
          <RPPages />
        </RPLayout>
      ) : (
        <div style={{ width: "100%", height: "550px" }}>
          <RPPages />
        </div>
      )}
    </RPProvider>
  );
};

export default AppPdfViewer;
```

2. **Import Config Component**: Import the Config component

```jsx
"use client";
import { RPConfig } from "@react-pdf-kit/viewer";

function AppProviders({
  children,
  ...props
}) {
  return <RPConfig {...props}>{children}</RPConfig>;
}
export default AppProviders;
```

3. **Disable SSR for AppPdfViewer**: Disable SSR for the AppPdfViewer component by using `dynamic` from `next/dynamic` and set `ssr: false`

```jsx
"use client";
import dynamic from "next/dynamic";

export const LazyAppPdfViewer = dynamic(() => import("./AppPDFViewer"), {
  ssr: false,
});
```

4. **Disable SSR for AppProviders**: Disable SSR for AppProviders by using `dynamic` from `next/dynamic` and set `ssr: false`

```jsx
"use client";
import dynamic from "next/dynamic";

export const LazyAppProviders = dynamic(() => import("./AppProviders"), {
  ssr: false,
});
```

5. **Use the LazyAppProviders component in layout**: Add the React PDF component to your page

```jsx
import "./globals.css";
import { LazyAppProviders } from "./components/LazyAppProviders";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <LazyAppProviders>
          <main>{children}</main>
        </LazyAppProviders>
      </body>
    </html>
  );
}
```

6. **Use the LazyAppPdfViewer component in page**: Add the React PDF component to your page

```jsx
import { LazyAppPdfViewer } from "./components/LazyAppPDFViewer";

export default function Home() {
  return (
    <div className="w-[1028px] h-[700px] mx-auto">
      <h1>React PDF Kit Starter Toolkit in Next.js with App Router and JavaScript</h1>
      <br />
      <h2>Default Toolbar</h2>
      <LazyAppPdfViewer />
      <h2>Without Toolbar</h2>
      <LazyAppPdfViewer showToolbar={false} />
      <h2>Mobile</h2>
      <LazyAppPdfViewer defaultLayoutProps={{ style: { width: "500px" } }} />
    </div>
  )
}
```

## Examples

For more examples, please refer to the `src/app/page.js` file in this repository:

- Default Toolbar
- Without Toolbar
- Mobile View

_Remark: If you would like more examples, feel free open an issue._

For more configurations, please check the [documentation](https://docs.react-pdf-kit.dev) site.

## Meta
- Homepage: [https://www.react-pdf-kit.dev](https://www.react-pdf-kit.dev)
- Docs: [https://docs.react-pdf-kit.dev](https://docs.react-pdf-kit.dev)

---

Thank you for using React PDF Kit! We hope this toolkit helps you build amazing Next.js applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!
