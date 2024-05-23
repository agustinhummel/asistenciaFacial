import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const serverBackURL = import.meta.env.VITE_SERVER_BACK;

const CreateTurno = () => {
  const navigate = useNavigate();

  const patientsState = useSelector(state => state.patients.allPatients);
  const medicsState = useSelector(state => state.medics.allMedics);

  const patients = Array.isArray(patientsState) ? patientsState : [];
  const medics = Array.isArray(medicsState) ? medicsState : [];

  const patientOptions = patients.map(patient => ({
    value: patient.id,
    label: `${patient.fullname ? patient.fullname.charAt(0).toUpperCase() + patient.fullname.slice(1).toLowerCase() : ''}`
  }));
  
  const medicOptions = medics.map(medic => ({
    value: medic.id,
    label: `${medic.fullname ? medic.fullname.charAt(0).toUpperCase() + medic.fullname.slice(1).toLowerCase() : ''}`
  }));
  

  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    fecha: "",
    medicsIds: [],
    patientId: ""
  });

  const selectChangePatient = (value) => {
    const newState = { ...state, patientId: value ? value.value : "" };
    setErrors(validate(newState));
    setState(newState);
  };
  

  const selectChangeMedic = (values) => {
    const newState = { ...state, medicsIds: values.map(v => v.value) };
    setErrors(validate(newState));
    setState(newState);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const newState = { ...state, [e.target.name]: e.target.value };
    setState(newState);
    setErrors(validate(newState));
  };

  const validate = (state) => {
    const errores = {};
    if (!state.fecha) {
      errores.fecha = "Por favor, ingresa la fecha";
    }
    if (state.medicsIds.length === 0) {
      errores.medicsIds = "Por favor, selecciona un médico";
    }
    if (!state.patientId) {
      errores.patientId = "Por favor, selecciona un paciente";
    }
    return errores;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(state);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(`${serverBackURL}/turno`, {
          fecha: state.fecha,
          medicsIds: state.medicsIds,
          patientId: state.patientId
        });

        if (response.data.error) {
          alert(`Error: ${response.data.error}`);
        } else {
          alert("Turno creado exitosamente");
          navigate('/admin');
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    } else {
      alert("Tienes campos sin completar");
    }
  };

  return (
    <section>
      <div className="flex overflow-hidden min-h-[calc(100vh-13vh)]">
        <div className="flex flex-col justify-center flex-1 px-6 py-6">
          <div className="w-full max-w-xl mx-auto sm:w-96">
            <div>
              <h2 className="mt-24 text-3xl font-bold text-option1-color flex justify-center">
                Asignar Turno
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-neutral-600">
                      Profesional
                    </label>
                    <div className="mt-1">
                      <Select
                        onChange={selectChangeMedic}
                        isMulti
                        name="medicsIds"
                        options={medicOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    </div>
                    {errors.medicsIds && <div className="error text-red-500 mx-3">{errors.medicsIds}</div>}
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-neutral-600">
                      Fecha
                    </label>
                    <div className="mt-1">
                      <input
                        id="fecha"
                        name="fecha"
                        type="date"
                        onChange={handleChange}
                        value={state.fecha}
                        placeholder="Fecha de Turno"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-dark-color bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                    {errors.fecha && <div className="error text-red-500 mx-3">{errors.fecha}</div>}
                  </div>
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-neutral-600">
                      Paciente
                    </label>
                    <div className="mt-1">
                      <Select 
                        onChange={selectChangePatient}
                        name="patientId"
                        options={patientOptions}
                        className="basic-single-select"
                        classNamePrefix="select"
                      />
                    </div>
                    {errors.patientId && <div className="error text-red-500 mx-3">{errors.patientId}</div>}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-dark-color transition duration-500 ease-in-out transform bg-main-color rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Crear
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTurno;
