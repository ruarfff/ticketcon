import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./root";
import "./css/bootstrap.min.css";
import "./css/main.css";
import "./css/responsive.css";
import "./styles/global.css";
import "./styles/index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing root element");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
