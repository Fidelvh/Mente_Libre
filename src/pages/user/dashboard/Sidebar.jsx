// src/pages/user/dashboard/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "@/context/authContext.jsx";

const Sidebar = ({ collapsed, onToggle }) => {
  const { user } = useAuth();

  return (
    <aside className={`ml-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="ml-sidebar__brand">
        <img src="/src/assets/LogoMenteLibre.png" alt="Mente Libre" />
        <button className="ml-sidebar__toggle" onClick={onToggle}>
          ☰
        </button>
      </div>

      <nav className="ml-sidebar__nav">
        <NavLink to="/dashboard" className="ml-link" end>
          Inicio
        </NavLink>

        <NavLink to="/programas" className="ml-link">
          Programas
        </NavLink>

        <NavLink to="/dashboard/mis-programas" className="ml-link">
          Mis programas
        </NavLink>

        <NavLink to="/perfil" className="ml-link">
          Perfil
        </NavLink>

        {user && user.role === "admin" && (
          <NavLink to="/admin" className="ml-link admin-link">
            Panel Admin
          </NavLink>
        )}
      </nav>

      <div className="ml-sidebar__footer">
        <small>© Mente Libre</small>
      </div>
    </aside>
  );
};

export default Sidebar;
