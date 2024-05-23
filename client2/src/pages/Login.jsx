
import { useEffect, useState } from "react";
import { useNavigate   } from "react-router-dom"; 
import { Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/state/AuthActions";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    
    if (user && user.isAdmin) {
      navigate('/admin');
    } else if (user) {
      navigate('/medic');
    }
  }, [user, navigate]);


  const clickLogin = async() => {
      dispatch(loginUser(email,password))
  };

  return (
    <main>
      <section className=" bg-sky-800 flex flex-wrap font-serif lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center ">
            <h1 className="text-2xl font-bold sm:text-3xl">Bienvenidos !!!</h1>

            <p className="mt-4 ">
              Plataforma de control de asistencia de pacientes del Instituto
              Delpiano
            </p>
          </div>

          <div className="mx-auto mb-0 mt-8 max-w-md space-y-4">
            <div>
              <label className="sr-only">Email</label>

              <div className="relative">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Ingresa el Email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
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
              </div>
            </div>

            <div>
              <label className="sr-only">Contraseña</label>

              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Ingresa la contraseña"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Button onClick={() => clickLogin()} type="primary">Ingresar</Button>
            </div>
          </div>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://res.cloudinary.com/dc0rv28n2/image/upload/v1710257463/pantalla_wxi5pe.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
