"use client";
import dynamic from "next/dynamic";

export const LazyPdfConfig = dynamic(() => import("./PdfConfig"), {
  ssr: false,
});
