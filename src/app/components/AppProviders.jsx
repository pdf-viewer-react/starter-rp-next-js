"use client";
import { RPConfig } from "@react-pdf-kit/viewer";

function AppProviders({
  children,
  ...props
}) {
  return <RPConfig {...props}>{children}</RPConfig>;
}
export default AppProviders;
