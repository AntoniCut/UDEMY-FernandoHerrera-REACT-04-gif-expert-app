//  ***********************************************************************
//  **********  /gif-expert-app/test/hooks/useFetchGifs.test.js  **********
//  ***********************************************************************


import { describe, test, expect } from "@jest/globals";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


//  ----------------------------------------
//  ----------  Pruebas de Hooks  ----------
//  ----------------------------------------

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {
      
        const { result  } = renderHook( () => useFetchGifs('One Punch'));
        console.log('result => ', result);
        
        const { images, isLoading } = result.current;

        expect( images.length).toBe(0);
        expect( isLoading ).toBeTruthy();
  
    });

    test('debe de retornar un arreglo de imagenes y el isLoading en false ', async () => {
      
        const { result  } = renderHook( () => useFetchGifs('One Punch'));
        
        await waitFor( () => expect( result.current.images.length ).toBeGreaterThan(0) );

        const { images, isLoading } = result.current;

        expect( images.length).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });
  
});



/*  -----  useFetchGifs.js  -----

//  ----------  CUSTOM HOOKS  ----------
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        
        const getImages = async () => {
            const newImages = await getGifs(category);
            setImages(newImages);
            setIsLoading(false);
        }

        getImages();

    }, [category])


    return {
        images,                 //  es igual a esto --  images: images,
        isLoading,              //  es igual a esto --  isLoading: isLoading
    }
}

*/


