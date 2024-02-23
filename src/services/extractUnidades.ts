// function extractUnidades(divisionArray) {
//     const unidades = [];
//     for (const unidadObject of divisionArray) {
//         unidades.push(unidadObject.UNIDAD);
//     }
//     return unidades;
// }
// const allUnidades = [];
// for (const division in divisiones_militatees) {
//     allUnidades.push(...extractUnidades(divisiones_militatees[division]));
// }

function extractAllUnidades(divisiones_militatees) {
    const allUnidades = [];
    for (const division in divisiones_militatees) {
        for (const unidadObject of divisiones_militatees[division]) {
            allUnidades.push(unidadObject.UNIDAD);
        }
    }
    return allUnidades;
}
function extractPorUnidades(divisiones_militatees, division) {
    const unidades = [];
    if (divisiones_militatees.hasOwnProperty(division)) {
        for (const unidadObject of divisiones_militatees[division]) {
            unidades.push(unidadObject.UNIDAD);
        }
    }
    return unidades;
}

function extractDivisiones(divisiones_militatees) {
    const divisiones = [];
    for (const division in divisiones_militatees) {
        divisiones.push(division);
    }
    return divisiones;
}

export { extractAllUnidades, extractPorUnidades, extractDivisiones };
