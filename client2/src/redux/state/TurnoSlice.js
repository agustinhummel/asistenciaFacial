import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTurnos: [],
  myTurnoByPatient: [],
  myTurnoByMedic: [],
  selectedTurno: null,
  loading: false,
  error: null,
};

const turnoSlice = createSlice({
  name: 'turnos',
  initialState,
  reducers: {
    setTurnos(state, action) {
      state.allTurnos = action.payload;
    },
    setSelectedTurno(state, action) {
      state.selectedTurno = action.payload;
    },
    setMyTurnoByPatient(state, action) {
      state.myTurnoByPatient = action.payload;
    },
    setMyTurnoByMedic(state, action) {
      state.myTurnoByMedic = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setTurnos, setSelectedTurno, setMyTurnoByPatient, setMyTurnoByMedic, setLoading, setError } = turnoSlice.actions;
export const turnosReducer = turnoSlice.reducer;
