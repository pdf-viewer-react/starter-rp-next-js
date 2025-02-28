import { RPConfig } from "@pdf-viewer/react";

const PdfConfig = ({ children }) => (
  <RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default PdfConfig;
