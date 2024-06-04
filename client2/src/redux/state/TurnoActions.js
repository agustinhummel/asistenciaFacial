import { setTurnos, setSelectedTurno, setMyTurnoByPatient, setLoading, setError, setMyTurnoByMedic } from './TurnoSlice';

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
  
  const apiUrl = `http://localhost:5000/turno/bymedicid?medicId=${medicId}&patientId=${patientId}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`No se pudo obtener el turno con IDs`);
    }
    
    const data = await response.json();
    
    dispatch(setMyTurnoByPatient(data.turnos));
  } catch (error) {
    
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getMyTurnoByMedic = (medicId) => async (dispatch) => {
  dispatch(setLoading(true));
  
  const apiUrl = `http://localhost:5000/turno/bymedicid?medicId=${medicId}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`No se pudo obtener el turno con IDs`);
    }
    
    const data = await response.json();
    
    dispatch(setMyTurnoByMedic(data.turnos));
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

export const editTurnoReview = (turnoId, updatedTurnoData) => async (dispatch) => {
  dispatch(setLoading(true));
  const apiUrl = `http://localhost:5000/turno`;
  try {
    const response = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ turnoId, review: updatedTurnoData }),  // Aquí estamos combinando turnoId con los datos actualizados
    });
    if (!response.ok) {
      throw new Error('No se pudo editar el turno');
    }

    // Puedes manejar la respuesta aquí si es necesario
    const data = await response.json();
    dispatch(setTurno(data));  // Suponiendo que tienes una acción para establecer el turno actualizado

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
