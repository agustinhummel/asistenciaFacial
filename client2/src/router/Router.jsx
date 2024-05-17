import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/Navbar";
import MedicHome from "../pages/Medic.jsx";
import AdminHome from "../pages/Admin.jsx";
import EditMedicForm from "../pages/EditarMedico.jsx";

const Login = lazy(() => import("../pages/Login.jsx"));


const Router = () => {
  return (
    <>
        
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/edit-medic/:medicId" element={<EditMedicForm />} /> {/* Nueva ruta para editar médico */}
            
            
            
            <Route path="/medic" element={<MedicHome />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default Router;