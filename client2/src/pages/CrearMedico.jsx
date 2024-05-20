import React from 'react'
import { Formik } from "formik";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const serverBackURL = import.meta.env.VITE_SERVER_BACK;

const CreateMedico = () => {
  const navigate = useNavigate()
  return (
    <section>
    <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]  ">
     <Formik
     
      initialValues={{ 
        fullname:"",
        email:"",
        nid:"",
        birthdate:"",
        password:""
      }}
      validate={(valores) => {
        let errores = {};

        if (!valores.fullname) {
          errores.fullname = "Por favor, ingrese el nombre del Paciente";
        } 
        if (!valores.email) {
          errores.email = "Por favor, ingrese el email del Paciente";
        } 
        if (!valores.nid) {
          errores.nid = "Por favor, ingrese DNI del Paciente";
        } 
        if (!valores.birthdate) {
          errores.birthdate = "Por favor, ingrese Fecha de Nacimiento del Paciente";
        }
        if (!valores.password) {
            errores.password = "Por favor, ingrese la Obra Social";
          }

       


        return errores;
      }}
      onSubmit={ async (valores, { resetForm }) => {

          const response = await axios.post(`${serverBackURL}/medic`, 
         {
            fullname:valores.fullname,
            email:valores.email,
            nid:valores.nid,
            birthdate:valores.birthdate,
            password:valores.password
         })
         
         if (response.data.error) {

          alert("Error",response.data.error) 
          
         }else{
          alert("Admin","Ingreso Exitoso !")
          navigate('/admin')
         } 
            resetForm();
    
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
      <div className="flex flex-col justify-center flex-1 px-6 py-6   ">
        <div className="w-full max-w-xl mx-auto sm:w-96">
        <div>
              <h2 className="mt-24 text-3xl font-bold text-option1-color flex justify-center">
                Dar de alta un Profesional
              </h2>
            </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Nombre{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Nombre"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.fullname && errors.fullname && (
              <div className="error text-red-500">{errors.fullname}</div>
            )}
                </div>
                <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Correo Electronico"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.email && errors.email && (
              <div className="error text-red-500">{errors.email}</div>
            )}
                </div>
                <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    DNI{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="nid"
                      name="nid"
                      type="text"
                      value={values.nid}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Sin puntos"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.nid && errors.nid && (
              <div className="error text-red-500">{errors.nid}</div>
            )}
                </div>
                <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Fecha de Nacimiento{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="birthdate"
                      name="birthdate"
                      type="text"
                      value={values.birthdate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="DD/MM/AAAA"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.birthdate && errors.birthdate && (
              <div className="error text-red-500">{errors.birthdate}</div>
            )}
                </div>
                <div className="space-y-1">
                  <label
                    
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Contraseña{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="text"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Contraseña"
                      className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                   {touched.password && errors.password && (
              <div className="error text-red-500">{errors.password}</div>
            )}

                </div>
                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-dark-color transition duration-500 ease-in-out transform bg-main-color rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
       )}
    </Formik>
    </div>
  </section>
  )
}

export default CreateMedico;