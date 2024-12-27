//  ****************************************************************************
//  **********  /gif-expert-app/test/cimponents/AddCategory.test.jsx  **********
//  ***************************************************************************


import { jest, describe, test, expect } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory />', () => {

    
    test('debe de cambiar el valor de la caja de texto', () => {
        
        //  -----  Sujeto de Pruebas  -----
        render( <AddCategory onNewCategory={ () => {} }/>);
        screen.debug();

        const input = screen.getByRole('textbox');

        //  -----  fireEvent se disparan los eventos  -----
        fireEvent.input(input, { target: { value: 'Hola Mundo' } });
        expect(input.value).toBe('Hola Mundo');

        screen.debug();

    });


    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama';
        
        //  -----  jest.fn()  --  simulación de función  -----
        const onNewCategory = jest.fn();

        //  -----  Sujeto de Pruebas  -----
        render( <AddCategory onNewCategory={ onNewCategory }/>);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

         //  -----  fireEvent se disparan los eventos  -----
         fireEvent.input( input, { target: { value: inputValue } });
         fireEvent.submit( form );
         //screen.debug();
         expect(input.value).toBe('');

         expect( onNewCategory ).toHaveBeenCalled();
         //expect( onNewCategory ).toHaveBeenCalledTimes(1);
         expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
 
    });


    test('no debe de llamar el onNewCategory si el input está vacio', () => {

                
        //  -----  jest.fn()  --  simulación de función  -----
        const onNewCategory = jest.fn();

        //  -----  Sujeto de Pruebas  -----
        render( <AddCategory onNewCategory={ onNewCategory }/>);
        
        const form = screen.getByRole('form');

         //  -----  fireEvent se disparan los eventos  -----
         fireEvent.submit( form );
         
         //  -----  1ª Forma  -----
         expect( onNewCategory ).toHaveBeenCalledTimes(0);

         //  -----  2ª Forma  -----
         expect( onNewCategory ).not.toHaveBeenCalled();
         


    });

})

/*  ---------- <AddCategory />>  ----------


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        //console.log(target.value)
        setInputValue(target.value);
    }


    const onSubmit = (e) => {

        e.preventDefault();

        if (inputValue.trim().length <= 1) return;                                 
        onNewCategory(inputValue.trim());
        setInputValue('');                                              
    }

    return (

        <form
            onSubmit={onSubmit}>

            <input
                type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>

    )
}


*/
