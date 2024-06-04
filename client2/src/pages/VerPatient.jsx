import React, { useEffect, useState } from "react";
import '../../src/Style.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyTurnoByPatient } from "../redux/state/TurnoActions";


const VerPatient = ({}) => {
  
    const medicId = useSelector(state => state.auth.user.id)
    const turnos = useSelector(state => state.turnos.myTurnoByPatient)
    const dispatch = useDispatch()
    const {patientId} = useParams()
    
    
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
      const year = date.getFullYear();
    
      return `${day}/${month}/${year}`;
    };

    useEffect(() => {
      
        dispatch(getMyTurnoByPatient(medicId, patientId))
        
    },[])
    

  return (
    
        <article >
    {turnos.map((turno, i) => (
      < div key={i}>
  <div className=" mb-2 shadow relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
    <img className="h-8 w-8" src="data:image/png;base64,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" alt="" />
    <input type="checkbox" className="peer hidden" id="navbar-open" />
    <label className="absolute right-4 top-5 cursor-pointer sm:hidden" for="navbar-open">
      <span className="sr-only">Toggle menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-labelledby="header-navigation" className="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-start">
      <h2 className="sr-only" id="header-navigation">Header navigation</h2>
      <ul className="flex flex-col items-center sm:flex-row">
        <li className="font-bold sm:mr-12">{turno.patient.fullname}</li>
        <li className="text-gray-800 sm:mr-12">{turno.patient.obraSocial}</li>
        <li className="text-gray-800 sm:mr-12">{turno.patient.nid}</li>
        <li className="text-gray-800 sm:mr-12">{formatDate(turno.patient.birthdate)}</li>
        <li className="text-gray-800 sm:mr-12">{turno.patient.email}</li>
      </ul>
     
    </nav>
  </div>
      </div>
    ))}
    <section>
    <div className="pb-4 border-b border-gray-600 flex justify-center items-center">
  <h3 className="text-xl font-semibold leading-6 text-gray-800">Historial del Paciente</h3>
</div>


  <div class="relative mx-auto max-w-7xl">
    <div class="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
      <div class="flex flex-col mb-12 overflow-hidden cursor-pointer">
      {turnos.map((turno, i) => (
        <div class="flex flex-col justify-between flex-1" key={i}>
          <a href="/blog-post"></a>
          <div class="flex-1">
            <a href="/blog-post">
              <div class="flex pt-6 space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-10">{formatDate(turno.fecha)}</time>
                
              </div>
            </a>
            <a href="#" class="block mt-2 space-y-6">
              <h3 class="text-2xl font-semibold leading-none tracking-tighter text-neutral-600">{turno.review}</h3>
              {/* <p class="text-lg font-normal text-gray-500">{turno.review}</p> */}
            </a>
          </div>
        </div>
        ))}
      </div>
      </div>




  </div>
</section>
    </article>
    
  
)}

export default VerPatient