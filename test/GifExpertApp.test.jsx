//  *****************************************************************
//  **********  /gif-expert-app/test/GifExpertApp.test.jsx  *********
//  *****************************************************************


import { jest, describe, test, expect } from "@jest/globals";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en <GifExpertApp />', () => {

    // test('Debe inicializar con una categoría por defecto ("España")', () => {
    //     render(<GifExpertApp />);
    //     expect(screen.getByText('España')).toBeInTheDocument();
    // });

    test('Debe agregar una nueva categoría si no está repetida', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Simula ingresar una nueva categoría
        fireEvent.input(input, { target: { value: 'React' } });
        fireEvent.submit(form);

        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(2); // España + React
    });

    test('No debe agregar una categoría duplicada', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Intenta agregar la categoría existente "España"
        fireEvent.input(input, { target: { value: 'España' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1); // Solo España
        // Opcional: Verificar el alert (simulado con jest.spyOn)
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
        expect(alertSpy).toHaveBeenCalledWith('categoria España repetida');
        alertSpy.mockRestore();
    });

    test('No debe agregar una categoría si el input está vacío', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Simula un intento de enviar una categoría vacía
        fireEvent.input(input, { target: { value: '' } });
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1); // Solo España
    });
});



/*
    ----------  <GisExpertApp />  ----------

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['España']);
    console.log(categories);

    const onAddCategory = newCategory => {

        if (categories.includes(newCategory)) {             //  si newCategory esta incluida en categories
            alert(`categoria ${newCategory} repetida`);
            return;
        }
        setCategories([newCategory, ...categories]);
    }


    return (

        <>
            <Header />

            <main className="main">

                <AddCategory onNewCategory={onAddCategory} />

                {
                    categories.map(category =>
                        <GifGrid key={category} category={category} />)
                }

            </main>

        </>
    )
}

*/