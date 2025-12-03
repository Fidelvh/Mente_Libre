// src/pages/user/dashboard/Topbar.jsx
import React from "react";
import { useAuth } from "@/context/authContext.jsx";

const Topbar = ({ onToggleSidebar }) => {
  const { user, logout } = useAuth();

  return (
    <header className="ml-topbar">
      <div className="ml-topbar__left">
        <button className="ml-topbar__menu" onClick={onToggleSidebar}>
          ☰
        </button>
        <h2 className="ml-topbar__title">Hola, {user?.name?.split(" ")[0] || "amigo"}</h2>
        <p className="ml-topbar__subtitle">¿Cómo te sientes hoy?</p>
      </div>

      <div className="ml-topbar__right">
        <div className="ml-topbar__avatar">
          {user?.avatar ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <div className="ml-avatar-placeholder">{(user?.name || "U").charAt(0)}</div>
          )}
        </div>

        <button className="ml-btn ml-btn--ghost" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Topbar;
