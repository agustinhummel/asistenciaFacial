import NavBar from './../../components/navBar';
import Footer from './../../components/footer';
import CheckboxAsistencia from "./../../components/checkboxAsitencia";

export default function home() {
  const citas = [
    { id: 1, paciente: "Hummel Agustin", fecha: "10-04-2024", hora: "11:30 am", obraSocial: "OSDE" },
    { id: 2, paciente: "Fulanito Perez", fecha: "16-04-2024", hora: "13:30 am", obraSocial: "IPS" },
    { id: 3, paciente: "Miguel Bletran", fecha: "10-05-2024", hora: "9:00 am", obraSocial: "SWISS MEDICAL" },
    { id: 4, paciente: "Hummel Agustin", fecha: "22-04-2024", hora: "7:30 am", obraSocial: "IPS" },
    { id: 5, paciente: "Hummel Agustin", fecha: "10-04-2024", hora: "10:30 am", obraSocial: "OSDE" },
    { id: 6, paciente: "Fulanito Perez", fecha: "16-04-2024", hora: "12:30 am", obraSocial: "IPS" },
    { id: 7, paciente: "Miguel Bletran", fecha: "10-05-2024", hora: "10:00 am", obraSocial: "SWISS MEDICAL" },
    { id: 8, paciente: "Godoy Enzo", fecha: "22-04-2024", hora: "7:30 am", obraSocial: "IPS" },
  ];

  citas.sort((a, b) => {
    if (a.fecha > b.fecha) {
      return 1;
    }
    if (b.fecha > a.fecha) {
      return -1;
    }
    return 0;
  });

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
              {citas.map((cita, i) => (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  key={i}
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {cita.paciente}
                  </th>
                  <td className="px-6 py-4">{cita.fecha}</td>
                  <td className="px-6 py-4">{cita.hora}</td>
                  <td className="px-6 py-4">{cita.obraSocial}</td>
                  <td className="px-6 py-2">
                    <CheckboxAsistencia id={cita.id} />
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
  