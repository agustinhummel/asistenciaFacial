import { configureStore } from "@reduxjs/toolkit";
import { doctorsReducer } from "./state/MedicSlice.js";
import { patientsReducer } from "./state/PatientSlice.js";
import { turnosReducer } from "./state/TurnoSlice.js";


export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    patients: patientsReducer,
    turnos:turnosReducer
  }
});