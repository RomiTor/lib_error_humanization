const getHumanizedError = async (ERR_CODE, token) => {
    //TODO: Agregar el token como parámetro cuando en backend lo tengan especificado
    const result = await fetch("https://dcs-mocks-ist.apps.stg.azr-cc-pcf.cloud.bns/init/error_message")
    const data = await result.json()
    return data;
}

export default getHumanizedError;