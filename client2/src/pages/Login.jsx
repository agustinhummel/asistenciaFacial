import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/state/AuthActions";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.isAdmin) {
      navigate('/admin');
    } else if (user) {
      navigate('/medic');
    }
  }, [user, navigate]);

  const initialValues = {
    email: '',
    password: ''
  };

  const onSubmit = async (values) => {
    dispatch(loginUser(values.email, values.password));
  };

  return (
    <main className="overflow-hidden">
      <section className="bg-sky-800 flex flex-col lg:flex-row font-serif items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg lg:mr-8">
          <h1 className="text-2xl font-bold text-center mb-4">Bienvenidos !!!</h1>
          <p className="text-sm text-center mb-6">
            Plataforma de control de asistencia de pacientes del Instituto Delpiano
          </p>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Requerido';
              }
              if (!values.password) {
                errors.password = 'Requerido';
              }
              return errors;
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="space-y-4">
                  <div className="relative">
                    <Field
                      type="email"
                      name="email"
                      className="w-full rounded-lg border-gray-200 p-4 pl-12 text-sm shadow-sm"
                      placeholder="Ingresa el Email"
                    />
                    <span className="absolute inset-y-0 left-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="w-full rounded-lg border-gray-200 p-4 pl-12 text-sm shadow-sm"
                      placeholder="Ingresa la contraseña"
                    />
                    <span
                      className="absolute inset-y-0 left-0 grid place-content-center px-4 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={showPassword ? "M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}
                        />
                      </svg>
                    </span>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="flex items-center justify-center">
                    <Button
                      htmlType="submit"
                      type="primary"
                      disabled={isSubmitting}
                    >
                      Ingresar
                    </Button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <img
          alt="Imagen descriptiva"
          src="https://res.cloudinary.com/dc0rv28n2/image/upload/v1710257463/pantalla_wxi5pe.jpg"
          className="hidden lg:block lg:w-1/3 rounded-lg"
        />
      </section>
    </main>
  );
}
