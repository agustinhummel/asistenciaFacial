import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import PatientTableMedic from '../components/MedicTablaPaciente';
import { fetchAllDoctors, deleteDoctor } from '../redux/state/MedicActions';
import { deletePatient, getAllPatients } from '../redux/state/PatientActions';
import { deleteTurno, fetchAllTurnos } from '../redux/state/TurnoActions';
import TurnoTable from '../components/AdminTablaTurno';

export default function AdminHome() {
  const dispatch = useDispatch();
  const [selectedView, setSelectedView] = useState('turno'); // Estado para la vista seleccionada


  const turno = useSelector((state) => state.turnos.allTurnos);
  

  
  

  useEffect(() => {

    dispatch(fetchAllTurnos());

  }, [dispatch]);

  return (
    <div className="flex">
      
      <div style={{ marginLeft: 20, flex: 1 }}>
       
        {selectedView === 'turno' && (
          <>
            <h2>Lista de Pacientes</h2>
            <PatientTableMedic data={turno} onDelete={(email) => dispatch(deletePatient(email))} />
          </>
        )}
       
       
      </div>
    </div>
  );
}
