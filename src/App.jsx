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
import DashboardMemoria from "@/pages/user/dashboard/DashboardMemoria.jsx";

// Admin Pages
/* import AdminRoute from "@/routes/adminRoute"; */


// Layouts and Components
import MainLayout from "@/layouts/MainLayout.jsx";
import UserDashboardLayout from "@layouts/UserDashboardLayout.jsx";

// Route Guards
import UserRoute from "@/components/auth/userRoute.jsx";
import ProtectedRoute from "@/components/auth/protectedRoute.jsx";
import AdminUsers from "@/pages/admin/AdminUsers.jsx";
import AdminLayout from "@/layouts/AdminLayout.jsx";



export const AdminRoute = ({ children }) => {
  const { user, token, loading } = useAuth();

  if (loading) return null;

  if (!token || user?.role !== "admin") {
    return <Navigate to="/login-register" replace />;
  }

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
      <Route element={<ProtectedRoute redirectTo="/login-register" />}>
        <Route path="/dashboard" element={<UserDashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="foro" element={<DashboardForo />} />
          <Route path="perfil" element={<DashboardPerfil />} />
          <Route path="programas" element={<DashboardProgramas />} />
          <Route path="progreso" element={<DashboardProgreso />} />
          <Route path="memoria" element={<DashboardMemoria />} />

        </Route>
      </Route>


      {/* ADMIN */}

      {/* <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminUsers />} />
        </Route>
      </Route> */}
      {/* ADMIN */}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminUsers />} />
        </Route>
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
