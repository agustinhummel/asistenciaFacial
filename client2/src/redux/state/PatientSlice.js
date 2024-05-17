import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allPatients: [],
  selectedPatient: null,
  loading: false,
  error: null,
};

const patientSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    setPatients(state, action) {
      state.allPatients = action.payload;
    },
    setSelectedPatient(state, action) {
      state.selectedPatient = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setPatients, setSelectedPatient, setLoading, setError } = patientSlice.actions;
export const patientsReducer = patientSlice.reducer;
