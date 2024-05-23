import { lazy } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import MedicHome from "../pages/Medic.jsx";
import AdminHome from "../pages/Admin.jsx";
import EditMedicForm from "../pages/EditarMedico.jsx";
import ProtectedRouteAdmin from "../components/ProtectedRouteAdmin.jsx";
import ProtectedRouteMedic from "../components/ProtectedRouteMedic.jsx";

const Login = lazy(() => import("../pages/Login.jsx"));

const Router = () => {
  return (
    <>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<ProtectedRouteAdmin element={<AdminHome />}/>} />
            <Route path="/admin/edit-medic/:medicId" element={<ProtectedRouteAdmin element={<EditMedicForm />}/>} />
            <Route path="/medic" element={<ProtectedRouteMedic element={<MedicHome />} />}/>
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default Router;