import { setPatients, setSelectedPatient, setLoading, setError } from './PatientSlice';
import { useSelector } from 'react-redux';

export const getAllPatients = () => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = 'http://localhost:5000/patient';
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('No se pudieron obtener los pacientes');
    }
    const data = await response.json();
    dispatch(setPatients(data.data.patient));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getPatient = (patientId) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/patient/?patientId=${patientId}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    dispatch(setSelectedPatient(data.data.patient));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const editPatient = (patientId, updatedPatientData) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/patient`;
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(updatedPatientData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('No se pudo editar al paciente');
    }
    await response.json();
    dispatch(getAllPatients()); 
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deletePatient = (patientId,token) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/patient/?email=${patientId}`;
  try {
    const response = await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error('No se pudo eliminar al paciente');
    }
    const data = await response.json();
    dispatch(getAllPatients()); 
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
