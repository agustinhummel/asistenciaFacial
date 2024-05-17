import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allTurnos: [],
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
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setTurnos, setSelectedTurno, setLoading, setError } = turnoSlice.actions;
export const turnosReducer = turnoSlice.reducer;
