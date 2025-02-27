import { RPConfig } from "@pdf-viewer/react";

const PDFConfig = ({ children }) => (
  <RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default PDFConfig;
