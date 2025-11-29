// src/main.jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // <<< unificado
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@/context/authContext";


function Root() {
  useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><Root /></AuthProvider>
  </React.StrictMode>
);
