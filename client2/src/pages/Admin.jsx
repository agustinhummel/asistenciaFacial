import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import PatientTable from '../components/AdminTablaPaciente';
import MedicTable from '../components/AdminTablaMedico';
import CreatePaciente from './CrearPaciente';
import CreateMedico from './CrearMedico';
import CreateTurno from './CrearTurno';
import { getAllMedics, deleteMedic } from '../redux/state/MedicActions';
import { deletePatient, getAllPatients } from '../redux/state/PatientActions';
import { deleteTurno, getAllTurnos } from '../redux/state/TurnoActions';
import TurnoTable from '../components/AdminTablaTurno';

export default function AdminHome() {
  const dispatch = useDispatch();
  const [selectedView, setSelectedView] = useState('medics');
  
  const medics = useSelector((state) => state.medics.allMedics);
  const token = useSelector((state) => state.auth.token);
  const patients = useSelector((state) => state.patients.allPatients);
  const turnos = useSelector((state) => state.turnos.allTurnos);

  const onClick = (e) => {
    switch (e.key) {
      case '1':
        dispatch(getAllMedics());
        setSelectedView('medics');
        break;
      case '2':
        setSelectedView('createMedics');
        break;
      case '3':
        dispatch(getAllPatients());
        setSelectedView('patients');
        break;
      case '4':
        setSelectedView('createPatient');
        break;
      case '5':
        dispatch(getAllTurnos());
        setSelectedView('turnos');
        break;
      case '6':
        setSelectedView('createTurno');
        break;
      default:
        break;
    }
  };

  const menuItems = [
    {
      key: "sub1",
      label: "Profesional",
      icon: <SettingOutlined />,
      children: [
        {
          key: "1",
          label: "Buscar Profesional",
        },
        {
          key: "2",
          label: "Crear Profesional",
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub2",
      label: "Paciente",
      icon: <SettingOutlined />,
      children: [
        {
          key: "3",
          label: "Buscar Pacientes",
        },
        {
          key: "4",
          label: "Crear Paciente",
        },
      ],
    },
    {
      type: "divider",
    },
    {
      key: "sub3",
      label: "Turno",
      icon: <SettingOutlined />,
      children: [
        {
          key: "5",
          label: "Buscar Turno",
        },
        {
          key: "6",
          label: "Crear Turno",
        },
      ],
    },
  ];

  useEffect(() => {
    dispatch(getAllMedics());
    dispatch(getAllPatients());
    dispatch(getAllTurnos());
  }, [dispatch]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4">
        <Menu
          onClick={onClick}
          style={{ width: '100%' }}
          mode="inline"
          items={menuItems}
        />
      </div>
      <div className="w-full md:w-3/4 overflow-x-auto">
        {selectedView === 'medics' && (
          <MedicTable data={medics} onDelete={(email) => dispatch(deleteMedic(email,token))} />
        )}
        {selectedView === 'patients' && (
          <PatientTable data={patients} onDelete={(email) => dispatch(deletePatient(email,token))} />
        )}
        {selectedView === 'createMedics' && (
          <CreateMedico />
        )}
        {selectedView === 'createPatient' && (
          <CreatePaciente />
        )}
        {selectedView === 'turnos' && (
          <TurnoTable data={turnos} onDelete={(id) => dispatch(deleteTurno(id,token))} />
        )}
        {selectedView === 'createTurno' && (
          <CreateTurno />
        )}
      </div>
    </div>
  );
}
