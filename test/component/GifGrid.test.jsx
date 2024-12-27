//  ***********************************************************************
//  **********  /gif-expert-app/src/components/GifGrid.test.jsx  **********
//  ***********************************************************************


import { jest, describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


//  DESACTIVAR EN EL COMPONENTE <Header />
//  import reactLogo from '../assets/react.svg' y su implementación
//  para que no de error la prueba.
//  al Terminar las pruebas ACTIVAR.


//  -----------------------------------------------------------------


//  -----  Mock del CustomHook useFetchGifs  -----
jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <AddCategory />', () => {

    const category = 'One Punch';
    
    test('debe de mostrar el loading inicialmente', () => {
        
        //  -----  Antes de tener imágenes  -----
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        //  -----  Sujeto de Pruebas  -----
        render( <GifGrid category={ category } /> );
        screen.debug();

        //  -----  Aserciones  -----
        expect( screen.getByText( 'Loading...') );
        expect( screen.getByText( category ) );
    });
    

    test('debe de mostrar items cuando se cargan las imágenes desde useFetchGifs', () => {
        

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        //  -----  Despues de tener imágenes  -----
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={category} /> );
        //screen.debug();

        expect( screen.getAllByRole('img').length ).toBe(3);
    });

});


/*

**********  <GifGrid category />  **********

export const GifGrid = ({ category }) => {

    
    //  -----  Custom Hooks  -----
    const { images, isLoading} = useFetchGifs( category );
    //console.log("useFetchGifs {images, isLoading} => ", {images, isLoading})
    
    
    return (

        <>
            <h3> {category} </h3>

            <LoadingMessage isLoading={ isLoading } />
                        
            <div className='card-grid'>
                
                {images.map( image => (
                    <GifItem key={image.id} {...image} />
                ))}

            </div>

        </>
    )
}


//  -----  Define los tipos de las props que el componente espera recibir  -----
GifGrid.propTypes = {
    category: PropTypes.string.isRequired, // `setCategories` debe ser una función y es obligatorio
}

*/