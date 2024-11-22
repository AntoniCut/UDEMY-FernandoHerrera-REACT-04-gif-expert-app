//  **********************************************************************
//  **********  /gif-expert-app/src/components/AddCategory.jsx  **********
//  **********************************************************************


import { useState } from 'react';
import PropTypes from 'prop-types';


//  ------------------------------------
//  ----------  ADD CATEGORY  ----------
//  ------------------------------------
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


//  -----  Define los tipos de las props que el componente espera recibir  -----
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired, // `setCategories` debe ser una función y es obligatorio
}
