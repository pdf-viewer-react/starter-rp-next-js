"use client";
import dynamic from "next/dynamic";

export const LazyAppPDFViewer = dynamic(() => import("./AppPDFViewer"), {
  ssr: false,
});
