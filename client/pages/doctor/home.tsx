import NavBar from './../../components/navBar';
import Footer from './../../components/footer';
import CheckboxAsistencia from "./../../components/checkboxAsitencia";
import { Paciente, Turno } from "../../types";
import { useState, useEffect } from "react";
import { ObtenerPacientes, ObtenerTurnos } from "../../apiCalls";

export default function home() {
  const [data, setData] = useState<Paciente[]>([]);
  const [fecha, setFecha] = useState<Turno[]>([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      setData(await ObtenerPacientes());
      setFecha(await ObtenerTurnos());
    };
    obtenerDatos();
    ObtenerTurnos();
  }, []);

  function formatDate(dateString: any): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("es-ES", options); // Puedes ajustar el idioma según sea necesario
  }
  function extractTime(dateString: any): string {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0"); // Asegura que siempre tenga 2 dígitos
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Asegura que siempre tenga 2 dígitos
    return `${hours}:${minutes}hs`;
  }

  return (
    <>
      <NavBar></NavBar>
      <div className="px-8 pt-10 ">
        <p className="text-xl text-gray-700 uppercase pb-5">Tus pacientes son:</p>
        <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Paciente
                </th>
                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
                <th scope="col" className="px-6 py-3">
                  Hora
                </th>
                <th scope="col" className="px-6 py-3">
                  Obra Social
                </th>
                <th scope="col" className="px-6 py-3">
                  Asistencia
                </th>
              </tr>
            </thead>
            <tbody>
              {fecha?.map((p) => (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  key={p.id}
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {p.patient.fullname}
                  </th>
                  <td className="px-6 py-4">{formatDate(p.fecha)}</td>
                  <td className="px-6 py-4">{extractTime(p.fecha)}</td>
                  <td className="px-6 py-4">{p.patient.obraSocial}</td>
                  <td className="px-6 py-2">
                    <CheckboxAsistencia id={p.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
  