const urlBackend = process.env.NEXT_PUBLIC_API_URL;

export const ObtenerPacientes = async (email?: string) => {
  try {
    const response = email
      ? await fetch(`${urlBackend}/patient?email=${email}`)
      : await fetch(`${urlBackend}/patient`);
    return await response.json();
  } catch (error) {
    console.error("Error: obtener Pacientes", error);
  }
};

export const ObtenerMedicos = async (email?: string) => {
  try {
    const response = email
      ? await fetch(`${urlBackend}/medic?email=${email}`)
      : await fetch(`${urlBackend}/medic`);
    return await response.json();
  } catch (error) {
    console.error("Error: obtener Medicos", error);
  }
};


