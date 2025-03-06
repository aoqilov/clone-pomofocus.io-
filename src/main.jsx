import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// style
import "./style/scss/main.scss";
import "sass";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
