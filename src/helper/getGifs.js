//  ***************************************************************************
//  **********  /gif-expert-app/src/components/services/getGifs.jsx  **********
//  ***************************************************************************


//  -------------------------------------
//  ----------  peticion HTTP  ----------
//  -------------------------------------
export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Bo2lAzEB44TJ9AMpsgFW8sFeknTezEHs&q=${category}&limit=10`;

    try {
        
        const resp = await fetch(url);
        //console.log("resp =>", resp);

        //  -----  Verifica si la respuesta tiene un estado 429 (límite de tasa excedido)  -----
        if (resp.status === 429) {
            alert('Límite de solicitudes excedido. Por favor intenta de nuevo más tarde');
            throw new Error("Límite de solicitudes excedido. Por favor intenta de nuevo más tarde.");
        }

        //  -----  Si la respuesta es exitosa, continúa procesando los datos  -----
        const { data = [] } = await resp.json();
        //console.log("data => ", data);

        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        //console.log("gifs => ", gifs, "\n\n\n");

        return gifs;

    } catch (error) {
        //  -----  Captura cualquier error, incluyendo los del límite de tasa  -----
        console.error("Error al obtener los gifs:", error.message);
        return []; // Retorna un array vacío en caso de error
    }
}
