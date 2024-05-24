import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyTurnoByPatient } from "../redux/state/TurnoActions";


const VerPatient = ({}) => {
  
    const medicId = useSelector(state => state.medics.selectedMedic)
    const turnos = useSelector(state => state.turnos.myTurnoByPatient)
    const dispatch = useDispatch()
    const {patientId} = useParams()
    console.log(medicId)
    

    useEffect(() => {
      
        dispatch(getMyTurnoByPatient(medicId, patientId))
        
    },[turnos])

  return (
        <article className="min-h-[calc(100vh-13vh)] mt-20 px-4 py-24 mx-auto max-w-7x" >
              {turnos.map((turno, i)=>( 
                
                <div> 
                  <h1>{turno.fullname}</h1> 
                  <h1>{turno.birthdate}</h1>
                  <h1>{turno.nid}</h1>
                </div>
              ))}
        </article>
        )
}

export default VerPatient