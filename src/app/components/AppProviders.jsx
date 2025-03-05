import { RPConfig } from "@pdf-viewer/react";

const AppProviders = ({ children, ...props }) => (
  <RPConfig {...props}>{children}</RPConfig>
);

export default AppProviders;
