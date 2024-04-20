
export type Paciente =  {
        id: string,
        fullname: string,
        email: string,
        nid: string,
        birthdate: string,
        createdAt: string,
        updatedAt: string
}

export type ArrayPacientes = Paciente[]


export type Medico =  {
        id: string,
        fullname: string,
        password: string,
        email: string,
        nid: string,
        birthdate: string,
        createdAt: string,
        updatedAt: string
}


export type ArrayMedicos = Medico[]


