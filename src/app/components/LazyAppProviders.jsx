"use client";
import dynamic from "next/dynamic";

export const LazyAppProviders = dynamic(() => import("./AppProviders"), {
  ssr: false,
});
