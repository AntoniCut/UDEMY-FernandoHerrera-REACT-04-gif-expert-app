//  ******************************************************************
//  **********  /gif-expert-app/test/Helper/getGif.test.js  **********
//  ******************************************************************

import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
import { getGifs } from "../../src/helper/getGifs";


describe('Pruebas en getGifs()', () => {


    test('debe de retornar un arreglo de gifs ', async () => {

        const gifs = await getGifs('one Punch');
        //console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);

        expect( gifs[0]).toEqual({
            id: expect.any(Number),
            title: expect.any(String),
            url: expect.any(String)
        })

        
    });

   

});


/*  ----------  getGifs.js  ----------

export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Bo2lAzEB44TJ9AMpsgFW8sFeknTezEHs&q=${category}&limit=10`;

    try {
        
        const resp = await fetch(url);
                
        if (resp.status === 429) {
            alert('Límite de solicitudes excedido. Por favor intenta de nuevo más tarde');
            throw new Error("Límite de solicitudes excedido. Por favor intenta de nuevo más tarde.");
        }

        const { data = [] } = await resp.json();
        
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));

        
        return gifs;

    } catch (error) {
        
        console.error("Error al obtener los gifs:", error.message);
        return []; // Retorna un array vacío en caso de error
    }
}


*/