const urlBackend = process.env.NEXT_PUBLIC_API_URL;

export const ObtenerPacientes = async (email?: string) => {
  try {
    const response = email
      ? await fetch(`${urlBackend}/patient?email=${email}`)
      : await fetch(`${urlBackend}/patient`);
    const apiRespuesta = await response.json();
    return apiRespuesta.data.patient
  } catch (error) {
    console.error("Error: obtener Pacientes", error);
    return null
  }
};

export const ObtenerMedicos = async (email?: string) => {
  try {
    const response = email
      ? await fetch(`${urlBackend}/medic?email=${email}`)
      : await fetch(`${urlBackend}/medic`);
      const apiRespuesta = await response.json();
      return apiRespuesta.data.patient
  } catch (error) {
    console.error("Error: obtener Medicos", error);
    return null
  }
};

export const ObtenerTurnos = async (fecha?: string) => {
  try {
    const response = fecha ? await fetch(`${urlBackend}/turno?fecha=${fecha}`) : await fetch(`${urlBackend}/turno`);
    const apiRespuesta = await response.json();
    return apiRespuesta.data.turno;
  } catch (error) {
    console.error("Error: obtener Turnos", error);
    return null;
  }
};