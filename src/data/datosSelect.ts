
const expediciones = [
  "Seleccione lugar de expedición",
  "LP",
  "CBBA",
  "SC",
  "BN",
  "PT",
  "OR",
  "CH",
  "TJ",
  "PA",
  "BE",
  "PD",
]

const tipoUsuario = [
  "Seleccione un tipo de usuario",
  "Administrador",
  "Coordinador",
  "Investigador",
]






const divisiones_militatees = {
  "DIV. 1": [
    { "UNIDAD": "BAT.CMDO Y SERV - I", "DEPARTAMENTO": "PANDO", "UBICACIÓN": "COBIJA" },
    { "UNIDAD": "RI-35 'BRUNO RACUA'", "DEPARTAMENTO": "PANDO", "UBICACIÓN": "PTO. RICO" },
    { "UNIDAD": "RI-36 'SANTOS PARIAMO'", "DEPARTAMENTO": "PANDO", "UBICACIÓN": "RURRENABAQUE" },
    { "UNIDAD": "BAT. ING. V. 'RIOSINHO'", "DEPARTAMENTO": "PANDO", "UBICACIÓN": "COBIJA" },
    { "UNIDAD": "BAT. PM-IV 'SLDO.SILES'", "DEPARTAMENTO": "PANDO", "UBICACIÓN": "COBIJA" },
  ],
  "DIV. 2": [
    { "UNIDAD": "BAT.CMDO Y SERV - II", "DEPARTAMENTO": "ORURO", "UBICACIÓN": "ORURO" },
    { "UNIDAD": "RI - 21 'ILLIMANI'", "DEPARTAMENTO": "ORURO", "UBICACIÓN": "UNCIA" },
    { "UNIDAD": "RI - 22 'MEJILLONES'", "DEPARTAMENTO": "ORURO", "UBICACIÓN": "HUACHACALLA" },
    { "UNIDAD": "RIA- 25 'TOCOPILLA'", "DEPARTAMENTO": "ORURO", "UBICACIÓN": "CURAHUARA" },
    { "UNIDAD": "RA - 1 'MY GRAL CAMACHO'", "DEPARTAMENTO": "ORURO", "UBICACIÓN": "ORURO" },
    { "UNIDAD": "BAT. ING. VII 'SAJAMA'", "DEPARTAMENTO": "ORURO", "UBICACIÓN": "CORQUE" },
  ],
  "DIV. 3": [
    { "UNIDAD": "BAT.CMDO Y SERV - III", "DEPARTAMENTO": "TARIJA", "UBICACIÓN": "VILLAMONTES" },
    { "UNIDAD": "RI - 5 'GRAL. CAMPERO'", "DEPARTAMENTO": "TARIJA", "UBICACIÓN": "IBIBOBO" },
    { "UNIDAD": "RI - 20 'TCNL. PADILLA'", "DEPARTAMENTO": "TARIJA", "UBICACIÓN": "TARIJA" },
    { "UNIDAD": "RA - 3 'PISAGUA'", "DEPARTAMENTO": "TARIJA", "UBICACIÓN": "VILLAMONTES" },
    { "UNIDAD": "RC - 3 'AROMA'", "DEPARTAMENTO": "TARIJA", "UBICACIÓN": "YACUIBA" },
    { "UNIDAD": "BAT. ING. - 1 'CNL. MENDEZ'", "DEPARTAMENTO": "TARIJA", "UBICACIÓN": "TARIJA" },
  ],
  "DIV. 4": [
    { "UNIDAD": "BAT.CMDO Y SERV - IV", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "CAMIRI" },
    { "UNIDAD": "RI - 6 'DR. CAMPOS'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "BOYUIBE" },
    { "UNIDAD": "RI - 11 'BOQUERON'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "CHARAGUA" },
    { "UNIDAD": "RA - 4 'TTE. BULLAIN'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "CUEVO" },
    { "UNIDAD": "RC - 1 'CNL. AVAROA'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "CHORETY" },
  ],
  "DIV. 5": [
    { "UNIDAD": "BAT.CMDO Y SERV - V", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "ROBORE" },
    { "UNIDAD": "RI - 13 'GRAL. MONTES'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "S.JOSE CHIQUITOS" },
    { "UNIDAD": "RI-14 'FLORIDA'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "SAN MATIAS" },
    { "UNIDAD": "RI - 15 'JUNÍN'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "ROBORE" },
    { "UNIDAD": "RA - 5 'MY. VERGARA'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "STGO.CHIQUITOS" },
    { "UNIDAD": "RC - 6 'CAP. CASTRILLO'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "P. SUAREZ" },
    { "UNIDAD": "BAT. ING - III 'GRAL PANDO'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "ROBORE" },
  ],
  "DIV. 6": [
    { "UNIDAD": "BAT. C. Y S. - VI", "DEPARTAMENTO": "BENI", "UBICACIÓN": "TRINIDAD" },
    { "UNIDAD": "RIS-16 'TCNL. JORDÁN'", "DEPARTAMENTO": "BENI", "UBICACIÓN": "RIBERALTA" },
    { "UNIDAD": "RI - 17 'INDEPENDENCIA'", "DEPARTAMENTO": "BENI", "UBICACIÓN": "GUAYARAMERIN" },
    { "UNIDAD": "RI - 29 'CAP. ECHEVERRIA'", "DEPARTAMENTO": "BENI", "UBICACIÓN": "TRINIDAD" },
    { "UNIDAD": "RC - 2 'MCAL. BALLIVIÁN'", "DEPARTAMENTO": "BENI", "UBICACIÓN": "SAN JOAQUIN" },
  ],
  "DIV. 7": [
    { "UNIDAD": "BAT.CMDO Y SERV - VII", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COCHABAMBA" },
    { "UNIDAD": "RI - 2 'MCAL. SUCRE'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "SUCRE" },
    { "UNIDAD": "RIAEROTRANS-18 'VICTORIA'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COCHABAMBA" },
    { "UNIDAD": "RI-26 'MCAL. AZURDUY'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COLOMI" },
    { "UNIDAD": "RAA - 7 'TUMUSLA'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COTAPACHI" },
    { "UNIDAD": "RPM-3 'GRAL. ARZE'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COTAPACHI" },
    { "UNIDAD": "BAT. ING -V 'TCNL. OVANDO'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "SUCRE" },
  ],
  "DIV. 8": [
    { "UNIDAD": "BAT.CMDO Y SERV - VIII", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "SANTA CRUZ" },
    { "UNIDAD": "RI - 7 'GRAL. MARZANA'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "CABEZAS" },
    { "UNIDAD": "RI - 10 'CNL. WARNES'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "S.IGN. DE VELASCO." },
    { "UNIDAD": "RAA-8 'TCNL. AGUIRRE'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "S.R. PAQUIO" },
    { "UNIDAD": "RC - 10 'GRAL. MERCADO'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "BUENA VISTA" },
    { "UNIDAD": "RPM-2 'TTE. AMEZAGA'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "SANTA CRUZ" },
  ],
  "DIV. 9": [
    { "UNIDAD": "BAT.CMDO Y SERV - IX", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "IBUELO" },
    { "UNIDAD": "RI - 31 'CNL. RIOS'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "CHIPIRIRI" },
    { "UNIDAD": "RI - 32 'CNL. MURGUIA'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "IBUELO" },
    { "UNIDAD": "RI - 33 'CNL. CABRERA'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "RIO BLANCO" },
    { "UNIDAD": "REEPPN-1 'CACIQUE JUAN MARAZA'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "IBUELO" },
  ],
  "DIV. 10": [
    { "UNIDAD": "BAT.CMDO Y SERV - X", "DEPARTAMENTO": "POTOSI", "UBICACIÓN": "TUPIZA" },
    { "UNIDAD": "RI - 3 'GRAL. PEREZ'", "DEPARTAMENTO": "POTOSI", "UBICACIÓN": "POTOSI" },
    { "UNIDAD": "RI - 4 'LOA'", "DEPARTAMENTO": "POTOSI", "UBICACIÓN": "UYUNI" },
    { "UNIDAD": "RI - 27 'ANTOFAGASTA'", "DEPARTAMENTO": "POTOSI", "UBICACIÓN": "COLCHA - K" },
    { "UNIDAD": "RC - 7 'CHICHAS'", "DEPARTAMENTO": "POTOSI", "UBICACIÓN": "TUPIZA" },
  ],
  "DIV.MEC. I": [
    { "UNIDAD": "BAT.CMDO Y SERV - XI", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "VIACHA" },
    { "UNIDAD": "RIM - 8 'AYACUCHO'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "ACHACACHI" },
    { "UNIDAD": "RIM - 23 'M. TOLEDO'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "VIACHA" },
    { "UNIDAD": "RIM - 30 'MURILLO'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "APOLLO" },
    { "UNIDAD": "RAM - 2 'BOLIVAR'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "VIACHA" },
    { "UNIDAD": "RAAM - 6 'MCAL BILBAO'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "VIACHA" },
    { "UNIDAD": "RCM - 4 'INGAVI'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "EL ALTO" },
    { "UNIDAD": "RCM - 5 'LANZA'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "GUAQUI" },
    { "UNIDAD": "BAT.ING.MEC - II 'GRAL ROMÁN'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "CARANAVI" },
    { "UNIDAD": "RCB-1 'CALAMA'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "PATACAMAYA" },
    { "UNIDAD": "RCB-2 'TARAPACÁ'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "COROCORO" },
  ],
  "UU.DD. COM. EJTO.": [
    { "UNIDAD": "SSOE", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "LA PAZ" },
    { "UNIDAD": "ESCONBOL", "DEPARTAMENTO": "TARIJA", "UBICACIÓN": "SANANDITA" },
    { "UNIDAD": "RS-1 'TTE. GERMÁN BUSCH'", "DEPARTAMENTO": "ORURO", "UBICACIÓN": "CHALLAPATA" },
    { "UNIDAD": "RS-2 'CNL. MANCHEGO'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "GUABIRA" },
    { "UNIDAD": "RPM-1 'CAP. SAAVEDRA'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "LA PAZ" },
    { "UNIDAD": "RI-1 'COLORADOS'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "LA PAZ" },
    { "UNIDAD": "BAT. COM. I 'CNL. VIDAURRE'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "LA PAZ" },
    { "UNIDAD": "BAT. LOG - 1 'HEROICAS RABONAS'", "DEPARTAMENTO": "ORURO", "UBICACIÓN": "VINTO" },
    { "UNIDAD": "GCAe-I 'SANTIAGO'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "CHIMORE" },
    { "UNIDAD": "COMP. AV. EJTO. 'CNL. LOPÉZ'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "EL ALTO" },
  ],
  "II.MM.": [
    { "UNIDAD": "ECEME. 'MCAL. ANDRES DE SANTA CRUZ'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COCHABAMBA" },
    { "UNIDAD": "EAATE. 'MCAL. JOSE BALLIVIAN'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COCHABAMBA" },
    { "UNIDAD": "EMIE 'Gral. Ejto. JOAQUIN ZENTENO ANAYA'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "LA PAZ" },
    { "UNIDAD": "EMEE 'GRAL BRIG. RUFINO CARRASCO'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "TARATA" },
    { "UNIDAD": "COL. MIL. 'CNL. GUALBERTO VILLARROEL'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "LA PAZ" },
    { "UNIDAD": "EMSE. 'SGTO. MAXIMILIANO PAREDES'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "TARATA" },
    { "UNIDAD": "EMTE. 'TCNL. JUAN ONDARZA LARA'", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "LA PAZ" },
    { "UNIDAD": "EMME. 'TCNL. ADRIAN PATIÑO'", "DEPARTAMENTO": "VICHA", "UBICACIÓN": "LA PAZ" },
    { "UNIDAD": "LIC. MIL. 'TTE. EDMUNDO ANDRADE'", "DEPARTAMENTO": "SUCRE", "UBICACIÓN": "SUCRE" },
    { "UNIDAD": "I.T.P.P.E.", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "LA PAZ" },
    { "UNIDAD": "I.T.P.P.E.", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COCHABAMBA" },
    { "UNIDAD": "INSTITUTO TECGNOLOGICO MILITAR DEL TROPICO", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COCHABAMBA" },
  ],
  "UU. TRANS.": [
    { "UNIDAD": "BAT. TRANP-I", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "EL ALTO" },
    { "UNIDAD": "BAT. TRANP-II FUERZA DE TAREA DIABLOS VERDES", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "SANTA CRUZ" },
    { "UNIDAD": "BAT. TRANP-III SOF RAÚL CORNEJO", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COCHABAMBA" },
    { "UNIDAD": "BAT. TRANP-IV", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "SANTA CRUZ" },
    { "UNIDAD": "CENTRO GENERAL DE MANTENIMIENTO", "DEPARTAMENTO": "LA PAZ", "UBICACIÓN": "LA PAZ" },
  ],
  "UU. PROD. ": [
    { "UNIDAD": "BAT. ECO. 'DR. CARDENAS'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "SANTI IVAÑEZ (CBBA)" },
    { "UNIDAD": "BAT. ECO. II 'MOSCOSO'", "DEPARTAMENTO": "BENI", "UBICACIÓN": "REYES" },
    { "UNIDAD": "BAT. ECO. III 'E. PACCIERI'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "GUABIRA" },
    { "UNIDAD": "BAT. ECO. IV 'V. EDUARDO'", "DEPARTAMENTO": "COCHABAMBA", "UBICACIÓN": "COCHABAMBA" },
    { "UNIDAD": "BAT. ECO. V 'JULIO. SANJINEZ'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "ROBORE" },
    { "UNIDAD": "HARAS DEL EJERCITO 'MONTONEROS DE LA INDEPENDENCIA'", "DEPARTAMENTO": "SANTA CRUZ", "UBICACIÓN": "SANTA ROSITA DEL PAQUIO" },
  ],
}

const grados = [
  "Seleccione un grado",
  "GRAL. DE EJÉRCITO",
  "GRAL. DE DIVISIÓN",
  "GRAL. DE BRIGADA",
  "CNL.",
  "TCNL.",
  "MAY.",
  "CAP.",
  "TTE.",
  "ALF.",
  "SGTO. 1RO",
  "SGTO.",
  "CBO. 1RO",
  "CBO.",
  "SOLD."
]
export { grados, tipoUsuario, divisiones_militatees, expediciones };