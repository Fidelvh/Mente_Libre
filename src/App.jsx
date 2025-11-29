// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "@/page/home";
import Audio from "@/page/programas/audio";
import Meditaciones from "@/page/programas/meditaciones";
import Eventos from "@/page/programas/eventos";
import Foro from "@/page/foro";
import Contacto from "@/page/contacto";
import LoginRegister from "@/page/loginRegister";
import Filosofia from "@/components/filosofia";
import Dashboard from "@/page/user/dashboard";
import AdminPanel from "@/page/admin/adminPanel";
import MainLayout from "@/components/layouts/MainLayout";
import UserDashboardLayout from "@/components/dashboard/userDashboardLayout";
import UserRoute from "@/components/auth/userRoute";
import Programas from "@/components/dashboard/programas";
import Perfil from "@/components/dashboard/perfil";
import Progreso from "@/components/dashboard/progreso"; 



const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  const role = JSON.parse(localStorage.getItem("adminUser") || "{}")?.role;

  if (!token || role !== "admin") return <Navigate to="/login-register" replace />;
  return children;
};

export default function App() {
  return (
    <Routes>
      {/* PÚBLICAS */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/filosofia" element={<Filosofia />} />
        <Route path="/programas/audio" element={<Audio />} />
        <Route path="/programas/meditaciones" element={<Meditaciones />} />
        <Route path="/programas/eventos" element={<Eventos />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/login-register" element={<LoginRegister />} />
      {/*   <Route path="/programas" element={<Programas />} />
        <Route path="progreso" element={<Progreso/>} />
        <Route path="perfil" element={<Perfil/>} /> */}
      </Route>

      {/* USER */}
      <Route path="/dashboard/*" element={
          <UserRoute>
            <UserDashboardLayout />
          </UserRoute>
        }/>
        <Route path="/dashboard/programas" element={
          <UserRoute>
            <Programas />
          </UserRoute>}/>

        <Route path="/dashboard/progreso" element={
           <UserRoute>
            <Programas />
          </UserRoute>}/>
        
        <Route path="/dashboard/perfil" element={<Perfil/>} />
    

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminPanel />
          </AdminRoute>
        }
      />
    </Routes>
  );
}
