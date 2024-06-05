import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PatientTableMedic from '../components/MedicTablaPaciente';
import { deletePatient } from '../redux/state/PatientActions';
import { getMyTurnoByMedic } from '../redux/state/TurnoActions';



export default function AdminHome() {

  
  const dispatch = useDispatch();
  const [selectedView, setSelectedView] = useState('turno'); // Estado para la vista seleccionada
  const turnos = useSelector((state) => state.turnos.myTurnoByMedic);
  const medicId = useSelector(state => state.auth.user.id)
  


  useEffect(() => {

    dispatch(getMyTurnoByMedic(medicId));

  }, [dispatch]);

  return (
    <div className="flex">
      
      <div style={{ marginLeft: 20, flex: 1 }}>
       
        {selectedView === 'turno' && (
          <div >
            <PatientTableMedic data={turnos} onDelete={(email) => dispatch(deletePatient(email))} />
          </div>
        )}
       
       
      </div>
    </div>
  );
}
