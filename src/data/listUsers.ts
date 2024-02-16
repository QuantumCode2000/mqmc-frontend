const usuarios = {
  personal: [
    {
      id: 0,
      primerApellido: "admin",
      imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      segundoApellido: "admin",
      nombres: "admin",
      numeroDocumento: "123456789",
      expedicionDocumento: "admin",
      password: "123456789",
      nombreUsuario: "admin",
      fechaNacimiento: "NA",
      correoPersonal: "admin@admin.com",
      celularPersonal: "123456789",
      informacionLaboral: {
        tipoLaboral: "Administrador del sistema",
        correoInstitucional: "admin@admin.com",
        numeroInterno: "100",
        estado: "Activo",
        unidadOrganizacional: {
          id: 1,
          sigla: "RH",
          nombre: "Desarrollo",
          nivelJerarquico: "Super Administrador",
        },
        puesto: {
          id: 1,
          nombre: "Administrador del sistema",
        },
      },
    },
    {
      id: 1,

      primerApellido: "Pérez",
      imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      segundoApellido: "Gómez",
      nombres: "Juan David",
      numeroDocumento: "123456789",
      expedicionDocumento: "Beni",
      fechaNacimiento: new Date(1980, 1, 1),
      correoPersonal: "juan.perez@correo.com",
      celularPersonal: "3101234567",
      informacionLaboral: {
        tipoLaboral: "Planta",
        correoInstitucional: "juan.perez@empresa.com",
        numeroInterno: "100",
        estado: "Activo",
        unidadOrganizacional: {
          id: 1,
          sigla: "RH",
          nombre: "Recursos Humanos",
          nivelJerarquico: "Administrador",
        },
        puesto: {
          id: 1,
          nombre: "Desarrollador de Software",
        },
      },
      password: "123456789",
      nombreUsuario: "jperrezg",
    },
    {
      id: 2,
      primerApellido: "García",
      imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      segundoApellido: "Martínez",
      nombres: "Luis Alberto",
      numeroDocumento: "987654321",
      expedicionDocumento: "La Paz",
      fechaNacimiento: new Date(1975, 5, 15),
      correoPersonal: "luis.garcia@correo.com",
      celularPersonal: "71234567",
      informacionLaboral: {
        tipoLaboral: "Temporal",
        correoInstitucional: "luis.garcia@empresa.com",
        numeroInterno: "200",
        estado: "Activo",
        unidadOrganizacional: {
          id: 2,
          sigla: "ADM",
          nombre: "Administración",
          nivelJerarquico: "Médico",
        },
        puesto: {
          id: 2,
          nombre: "Cardiólogo",
        },
      },
      password: "123456789",
      nombreUsuario: "lgarciam",
    },
    {
      id: 3,
      primerApellido: "López",
      imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      segundoApellido: "Ramírez",
      nombres: "María Alejandra",
      numeroDocumento: "135792468",
      expedicionDocumento: "Santa Cruz",
      fechaNacimiento: new Date(1985, 8, 20),
      correoPersonal: "maria.lopez@correo.com",
      celularPersonal: "720987654",
      informacionLaboral: {
        tipoLaboral: "Planta",
        correoInstitucional: "maria.lopez@empresa.com",
        numeroInterno: "300",
        estado: "Activo",
        unidadOrganizacional: {
          id: 3,
          sigla: "MC",
          nombre: "Medicina Crítica",
          nivelJerarquico: "Médico",
        },
        puesto: {
          id: 3,
          nombre: "Médico Intensivista",
        },
      },
      password: "123456789",
      nombreUsuario: "mlopezr",
    },
    {
      id: 4,
      primerApellido: "Chávez",
      imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      segundoApellido: "Fernández",
      nombres: "Pedro José",
      numeroDocumento: "246813579",
      expedicionDocumento: "Cochabamba",
      fechaNacimiento: new Date(1972, 3, 10),
      correoPersonal: "pedro.chavez@correo.com",
      celularPersonal: "770654321",
      informacionLaboral: {
        tipoLaboral: "Temporal",
        correoInstitucional: "pedro.chavez@empresa.com",
        numeroInterno: "400",
        estado: "Activo",
        unidadOrganizacional: {
          id: 4,
          sigla: "PE",
          nombre: "Pediatría",
          nivelJerarquico: "Médico",
        },
        puesto: {
          id: 4,
          nombre: "Pediatra",
        },
      },
      password: "123456789",
      nombreUsuario: "pchavezf",
    },
    {
      id: 5,
      primerApellido: "Gutiérrez",
      imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      segundoApellido: "Díaz",
      nombres: "Luisa Fernanda",
      numeroDocumento: "369258147",
      expedicionDocumento: "Sucre",
      fechaNacimiento: new Date(1990, 11, 5),
      correoPersonal: "luisa.gutierrez@correo.com",
      celularPersonal: "730987654",
      informacionLaboral: {
        tipoLaboral: "Planta",
        correoInstitucional: "luisa.gutierrez@empresa.com",
        numeroInterno: "500",
        estado: "Activo",
        unidadOrganizacional: {
          id: 5,
          sigla: "GI",
          nombre: "Ginecología",
          nivelJerarquico: "Médico",
        },
        puesto: {
          id: 5,
          nombre: "Ginecóloga",
        },
      },
      password: "123456789",
      nombreUsuario: "lgutierrezd",
    },
  ],
  pacientes: [
    {
      id: 1,
      primerApellido: "LAURA",
      imgPerfil: "https://cdn-icons-png.flaticon.com/512/6915/6915987.png",
      segundoApellido: "COCHI",
      nombres: "LEONEL",
      numeroDocumento: "12421511",
      expedicionDocumento: "La Paz",
      nombreUsuario: "lauracochi",
      password: "123456789",
      fechaNacimiento: new Date(1996, 5, 12),
      informacionMedica: [
        {
          lugarInternacion: "Sanidad",
          fechaIngreso: new Date(2023, 10, 16),
          diagnosticoIngreso: "VARICELA",
          situacionActual: "En tratamiento",
          especialidad: "VIRALES",
          observaciones: "SE ENCUENTRA AISLADO Y RECIBE TRATAMIENTO VÍA ORAL",
        },
        {
          lugarInternacion: "Sanidad",
          fechaIngreso: new Date(2023, 10, 16),
          diagnosticoIngreso: "Torcedura de tobillo",
          situacionActual: "En tratamiento",
          especialidad: "Traumatología",
          observaciones: "Se encuentra en tratamiento y en observación",
        },
      ],
      informacionMilitar: {
        grado: "SLDO.",
        elon: "DIV-2",
        unidad: "RIA-25",
        dependiente: "TOCOPILLA",
      },
    },
  ],
};

export default usuarios;
