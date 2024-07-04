import { lazy } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../components/Navbar";
import MedicHome from "../pages/Medic.jsx";
import AdminHome from "../pages/Admin.jsx";
import EditMedicForm from "../pages/EditarMedico.jsx";
import EditPatientForm from "../pages/EditarPaciente.jsx";
import EditTurnoForm from "../pages/EditarTurno.jsx";
import ProtectedRouteAdmin from "../components/ProtectedRouteAdmin.jsx";
import ProtectedRouteMedic from "../components/ProtectedRouteMedic.jsx";

const Login = lazy(() => import("../pages/Login.jsx"));

function MainLayout() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<ProtectedRouteAdmin element={<AdminHome />} />} />
        <Route path="/admin/edit-medic/:medicId" element={<ProtectedRouteAdmin element={<EditMedicForm />} />} />
        <Route path="/admin/edit-patient/:patientId" element={<ProtectedRouteAdmin element={<EditPatientForm />} />} />
{/*         <Route path="/admin/edit-turno/:turnoId" element={<ProtectedRouteAdmin element={<EditTurnoForm />} />} />
 */}        <Route path="/medic/turno/bymedicid/:patientId" element={<ProtectedRouteMedic element={<EditPatientForm />} />} />
        <Route path="/medic" element={<ProtectedRouteMedic element={<MedicHome />} />} />
      </Routes>
    </>
  );
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
};

export default AppRouter;
