// src/main.jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import "@/assets/styles/theme.css";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/context/authContext";
import { ThemeProvider } from "@/context/themeContext";

function Root() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
