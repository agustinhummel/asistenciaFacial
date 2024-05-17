import { configureStore } from "@reduxjs/toolkit";
import { medicsReducer } from "./state/MedicSlice.js";
import { patientsReducer } from "./state/PatientSlice.js";
import { turnosReducer } from "./state/TurnoSlice.js";


export const store = configureStore({
  reducer: {
    medics: medicsReducer,
    patients: patientsReducer,
    turnos:turnosReducer
  }
});