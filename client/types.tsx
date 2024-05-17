
export interface Paciente {
  id: string;
  fullname: string;
  email: string;
  nid: string;
  birthdate: string;
  obraSocial: string;
  createdAt: string;
  updatedAt: string;
}

export interface Medico {
  id: string;
  fullname: string;
  password: string;
  email: string;
  nid: string;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
}

export interface Turno {
  id: string;
  fecha: string;
  patient: string;
  patientId: string;
  medicId: string;
  createdAt: string;
  updatedAt: string;
}





