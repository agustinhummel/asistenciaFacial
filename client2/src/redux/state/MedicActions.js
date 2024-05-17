import { setMedics, setSelectedMedic, setLoading, setError } from './MedicSlice';

export const getAllMedics = () => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = 'http://localhost:5000/medic';
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('No se pudieron obtener los medicos');
    }
    const data = await response.json();
    dispatch(setMedics(data.data.medic));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getMedic = (medicId) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/medic/${medicId}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`No se pudo obtener el medico con ID ${medicId}`);
    }
    const data = await response.json();
    dispatch(setSelectedMedic(data.data.medic));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const editMedic = (medicId, updatedMedicData) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/medic${medicId}`;
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(updatedMedicData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('No se pudo editar al médico');
    }
    const data = await response.json();
    dispatch(getAllMedics()); 
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteMedic = (medicId) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/medic/?email=${medicId}`;
  try {
    const response = await fetch(apiUrl, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('No se pudo eliminar al médico');
    }
    const data = await response.json();
    dispatch(getAllMedics()); 
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
