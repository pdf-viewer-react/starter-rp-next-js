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
  );
}
