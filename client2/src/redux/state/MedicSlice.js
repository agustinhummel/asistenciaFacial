import { createSlice } from "@reduxjs/toolkit";

const medicsSlice = createSlice({
  name: "medics",
  initialState: {
    allMedics: [],
    selectedMedic: null,
    loading: false,
    error: null,
  },
  reducers: {
    setMedics: (state, action) => {
      state.allMedics = action.payload;
    },
    setSelectedMedic: (state, action) => {
      state.selectedMedic = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMedics, setSelectedMedic, setLoading, setError } = medicsSlice.actions;
export const medicsReducer = medicsSlice.reducer;
