import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/Navbar";
import MedicHome from "../pages/Medic.jsx";
import AdminHome from "../pages/Admin.jsx";

const Login = lazy(() => import("../pages/Login.jsx"));


const Router = () => {
  return (
    <>
        <NavBar></NavBar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/medic" element={<MedicHome />} />
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default Router;