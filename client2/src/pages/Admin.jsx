import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import PatientTable from '../components/AdminTablaPaciente';
import MedicTable from '../components/AdminTablaMedico';
import { getAllMedics, deleteMedic } from '../redux/state/MedicActions';
import { deletePatient, getAllPatients } from '../redux/state/PatientActions';
import { deleteTurno, getAllTurnos } from '../redux/state/TurnoActions';
import TurnoTable from '../components/AdminTablaTurno';

export default function AdminHome() {
  const dispatch = useDispatch();
  const [selectedView, setSelectedView] = useState('medics');

  const medics = useSelector((state) => state.medics.allMedics);
  const patients = useSelector((state) => state.patients.allPatients);
  const turnos = useSelector((state) => state.turnos.allTurnos);

  const onClick = (e) => {
    switch (e.key) {
      case '1':
        dispatch(getAllMedics());
        setSelectedView('medics');
        break;
      case '2':
        <>Vista para crear doctor</>
        setSelectedView('createMedics');
        break;
      case '3':
        dispatch(getAllPatients());
        setSelectedView('patients');
        break;
      case '4':
        <>Vista para crear paciente</>
        setSelectedView('createPatient');
        break;
      case '5':
        dispatch(getAllTurnos());
        setSelectedView('turnos');
        break;
      case '6':
        <>Vista para crear turno</>
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
    <div className="flex">
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        mode="inline"
        items={menuItems}
      />
      <div style={{ marginLeft: 20, flex: 1 }}>
        {selectedView === 'medics' && (
          <>
            <h2>Lista de Profesionales</h2>
            <MedicTable data={medics} onDelete={(email) => dispatch(deleteMedic(email))} />
          </>
        )}
        {selectedView === 'patients' && (
          <>
            <h2>Lista de Pacientes</h2>
            <PatientTable data={patients} onDelete={(email) => dispatch(deletePatient(email))} />
          </>
        )}
        {selectedView === 'createDoctor' && (
          <h2>Formulario de Creación de Profesional</h2>
          
        )}
        {selectedView === 'createPatient' && (
          <h2>Formulario de Creación de Paciente</h2>
        )}
        {selectedView === 'turnos' && (
          <>
            <h2>Lista de Turnos</h2>
            
            <TurnoTable data={turnos} onDelete={(id) => dispatch(deleteTurno(id))} />
          </>        )}
        {selectedView === 'createTurno' && (
          <h2>Formulario de Creación de Turno</h2>
        )}
      </div>
    </div>
  );
}
