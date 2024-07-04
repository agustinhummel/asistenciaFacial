import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyTurnoByPatient } from "../redux/state/TurnoActions";

const VerPatient = () => {
  const medicId = useSelector(state => state.auth.user.id);
  const turnos = useSelector(state => state.turnos.myTurnoByPatient);
  const dispatch = useDispatch();


  
  const { patientId } = useParams();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    dispatch(getMyTurnoByPatient(medicId, patientId));
  }, [dispatch, medicId, patientId]);

  // Obtener un solo paciente para evitar duplicados
  const patient = turnos.length > 0 ? turnos[0].patient : null;

  return (
    <article className="px-4 py-4">
      {patient && (
        <div className="mb-4 shadow-lg flex flex-col sm:flex-row items-center sm:items-start bg-white rounded-lg p-4 sm:px-6">
          <img
        src="https://res.cloudinary.com/dc0rv28n2/image/upload/v1713022033/logoGif_dfhze4.gif"
        className="h-8"
        alt="Flowbite Logo"
      />
          <nav className="w-full sm:w-auto flex flex-col items-center sm:ml-6">
            <ul className="flex flex-col sm:flex-row w-full sm:w-auto text-center sm:text-left">
              <li className="font-bold sm:mr-12 mb-2 sm:mb-0">{patient.fullname}</li>
              <li className="text-gray-800 sm:mr-12 mb-2 sm:mb-0">{patient.obraSocial}</li>
              <li className="text-gray-800 sm:mr-12 mb-2 sm:mb-0">{patient.nid}</li>
              <li className="text-gray-800 sm:mr-12 mb-2 sm:mb-0">{formatDate(patient.birthdate)}</li>
              <li className="text-gray-800 sm:mr-12 mb-2 sm:mb-0">{patient.email}</li>
            </ul>
          </nav>
        </div>
      )}
      
      <section>
        <div className="pb-4 border-b border-gray-600 flex justify-center items-center">
          <h3 className="text-xl font-semibold leading-6 text-gray-800">Historial del Paciente</h3>
        </div>
        
        <div className="grid gap-8 mt-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {turnos.map((turno, i) => (
            <div className="bg-white p-4 rounded-lg shadow-xl" key={i}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-sm text-gray-500">{formatDate(turno.fecha)}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mt-2  ">{turno.review}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default VerPatient;
