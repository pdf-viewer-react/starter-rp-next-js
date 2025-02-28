import { RPConfig } from "@pdf-viewer/react";

const AppProviders = ({ children }) => (
  <RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default AppProviders;
