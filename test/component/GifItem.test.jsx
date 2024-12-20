//  ***********************************************************************
//  **********  /gif-expert-app/src/components/GifItem.test.jsx  **********
//  ***********************************************************************


import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';    


    test('debe de hacer match con el snapshot ', () => {

        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    
    test('debe mostrar la imagen con el URL y el ALT indicado ', () => {

        render(<GifItem title={title} url={url} />);
        
        //screen.debug();
        //console.log( 'src de la imagen => ', screen.getByRole('img').src);
        //console.log( 'alt de la imagen => ', screen.getByRole('img').alt)
        
        //expect( screen.getByRole('img').src).toBe( url );
        //expect( screen.getByRole('img').alt).toBe( title );

        //  -----  igual que las 2 lineas de arriba  -----
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    
    test('debe mostrar el titulo en el componente ', () => {

        render(<GifItem title={title} url={url} />);
        
        expect( screen.getByText( title) ).toBeTruthy();
                
    });

});


/*  ----------  <GigItem />>  ----------
import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {

    return (

        <div className='card'>

            <p> {title} </p>
            <img src={url} alt={title} />

        </div>
    )
}

GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

*/