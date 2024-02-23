function filtrarPorDocumento(arrayPersonal, valorDocumento) {
    return arrayPersonal.filter((persona) => {
        return persona.documento === valorDocumento;
    });
}
export { filtrarPorDocumento }