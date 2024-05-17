import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatients } from '../redux/state/PatientActions';
import { fetchAllTurnos } from '../redux/state/TurnoActions';

export default function MedicHome() {
  const dispatch = useDispatch();
  const pacientes = useSelector(state => state.pacientes.data);

  useEffect(() => {
    dispatch(getAllPatients());
    dispatch(fetchAllTurnos());
  }, [dispatch]);

  return (
    <>
      <div className="px-8 pt-10">
        <p className="text-xl text-gray-700 uppercase pb-5">Tus pacientes son:</p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
              {pacientes.map(patient => (
                <tr
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  key={patient.id}
                >
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {patient.fullname}
                  </th>
                  <td className="px-6 py-4">{formatDate(patient.birthdate)}</td>
                  <td className="px-6 py-4">{formatDate(patient.createdAt)}</td>
                  <td className="px-6 py-4">{patient.obraSocial}</td>
                  <td className="px-6 py-2">
                    <CheckboxAsistencia id={patient.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
