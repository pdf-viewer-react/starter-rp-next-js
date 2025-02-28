# React PDF Starter Toolkit in Next.js and JavaScript

Welcome to the React PDF Starter Toolkit! This repository provides a comprehensive guide on integrating React PDF with Nextjs and JavaScript. It showcases how React PDF can be integrated and rendered as part of a Next.js project.

## Table of Contents

- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

   ```bash
   git clone https://github.com/reactpdf/starter-rp-next-js.git
   cd starter-rp-next-js
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

This repository includes an example project to demonstrate React PDF in action.

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

### Using the React PDF Component

Once the example project is running, you can explore the source code to see how the React PDF component is integrated. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```jsx
import { RPProvider, RPDefaultLayout, RPPages } from "@pdf-viewer/react";

const AppPdfViewer = (props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
      {...providerProps}
    >
      {showToolbar ? (
        <RPDefaultLayout {...defaultLayoutProps}>
          <RPPages />
        </RPDefaultLayout>
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
import { RPConfig, RPConfigProps } from "@pdf-viewer/react";

const AppProviders = ({ children }) => (
  <RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default AppProviders;
```

3. **Disable SSR for AppPdfViewer**: Disable SSR for the AppPdfViewer component by using `dynamic` from `next/dynamic` and set `ssr: false`

```jsx
"use client";
import dynamic from "next/dynamic";

export const LazyAppPdfViewer = dynamic(() => import("./AppPdfViewer"), {
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
import { LazyPdfConfig } from "./components/LazyPdfConfig";
import { LazyAppPdfViewer } from "./components/LazyAppPdfViewer";

export default function Home() {
  return (
    <div className="w-[1028px] h-[700px] mx-auto">
      <h1>RP Starter Toolkit: Nextjs + Javascript</h1>
      <br />
      <h2>Default Toolbar</h2>
      <LazyAppPdfViewer />
      <h2>Without Toolbar</h2>
      <LazyAppPdfViewer showToolbar={false} />
      <h2>Mobile</h2>
      <LazyAppPdfViewer defaultLayoutProps={{ style: { width: "500px" } }} />
    </div>
  );
}
```

## Examples

For more examples, please refer to the `src/App.jsx` file in this repository:

- Default Toolbar
- Without Toolbar
- Mobile View

_Remark: If you would like more examples, feel free open an issue._

For more configurations, please check the [documentation](https://docs.react-pdf.dev) site.

---

Thank you for using React PDF! We hope this toolkit helps you build amazing Next.js applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!
