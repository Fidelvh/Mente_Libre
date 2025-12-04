// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";

// Public Pages
import Home from "@/pages/home.jsx";
import Contacto from "@/pages/contacto.jsx";
import Foro from "@/pages/foro.jsx";
import Filosofia from "@/pages/public/filosofia/filosofia.jsx";

// Program Pages public
import Audio from "@/pages/public/programas/audio.jsx";
import Meditaciones from "@/pages/public/programas/meditaciones.jsx";
import Eventos from "@/pages/public/programas/eventos.jsx";
import Programas from "@/pages/public/programas/programas.jsx";

// Auth Pages
import LoginRegister from "@/pages/user/loginRegister.jsx";

// User Pages dashboard
import DashboardHome from "@/pages/user/dashboard/DashboardHome.jsx";
import DashboardForo from "@/pages/user/dashboard/DashboardForo.jsx";
import DashboardPerfil from "@/pages/user/dashboard/DashboardPerfil.jsx";
import DashboardProgramas from "@/pages/user/dashboard/DashboardProgramas.jsx";
import DashboardProgreso from "@/pages/user/dashboard/DashboardProgreso.jsx";

// Layouts and Components
import MainLayout from "@/layouts/MainLayout.jsx";
import UserDashboardLayout from "@layouts/UserDashboardLayout.jsx";

// Route Guards
import ProtectedRoute from "@/components/auth/protectedRoute.jsx";
import AdminPanel from "@/pages/admin/adminPanel.jsx";
import UserRoute from "@/components/auth/userRoute.jsx";



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
        <Route path="/foro" element={<Foro />} />
        <Route path="/filosofia" element={<Filosofia />} />


        <Route path="/programas" element={<Programas />} />
        <Route path="/programas/audio" element={<Audio />} />
        <Route path="/programas/meditaciones" element={<Meditaciones />} />
        <Route path="/programas/eventos" element={<Eventos />} />


        <Route path="/login-register" element={<LoginRegister />} />
        
      </Route>


      {/* USER DASHBOARD*/}
      <Route path="/dashboard/*" element={
          <ProtectedRoute>
            <UserDashboardLayout />
          </ProtectedRoute>
        }>

        <Route index element={<DashboardHome />} />
        <Route path="foro" element={<DashboardForo /> }/>
        <Route path="perfil" element={<DashboardPerfil />} />
        <Route path="programas" element={<DashboardProgramas />} />
        <Route path="progreso" element={<DashboardProgreso />} />
      </Route>
    

      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminPanel />
          </AdminRoute>
        }
      />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
