import { setTurnos, setSelectedTurno, setMyTurnoByPatient, setLoading, setError } from './TurnoSlice';

export const getAllTurnos = () => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = 'http://localhost:5000/turno';
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('No se pudieron obtener los turnos');
    }
    const data = await response.json();
    dispatch(setTurnos(data.data.turno));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getTurno = (turnoId) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/turno/${turnoId}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`No se pudo obtener el turno con ID ${turnoId}`);
    }
    const data = await response.json();
    dispatch(setSelectedTurno(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getMyTurnoByPatient = (medicId, patientId) => async (dispatch) => {
  dispatch(setLoading(true));
  
  const apiUrl = `http://localhost:5000/turno/medicbyid/?medicId=${medicId}&patientId=${patientId}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`No se pudo obtener el turno con IDs`);
    }
    
    const data = await response.json();
    console.log(data)
    dispatch(setMyTurnoByPatient(data));
  } catch (error) {
    console.log(error)
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const editTurno = (turnoId, updatedTurnoData) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/turno/${turnoId}`;
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      body: JSON.stringify(updatedTurnoData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('No se pudo editar el turno');
    }
    const data = await response.json();
    dispatch(getAllTurnos());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const deleteTurno = (turnoId) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/turno/${turnoId}`;
  try {
    const response = await fetch(apiUrl, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('No se pudo eliminar el turno');
    }
    const data = await response.json();
    dispatch(getAllTurnos());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
