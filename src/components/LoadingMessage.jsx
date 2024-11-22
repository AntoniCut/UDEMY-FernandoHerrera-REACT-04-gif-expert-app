//  *************************************************************************
//  **********  /gif-expert-app/src/components/LoadingMessage.jsx  **********
//  *************************************************************************


import PropTypes from 'prop-types';


//  ------------------------------------------------------------------------------
//  ----------  Renderiza el Mensage Cargando...  si isLoading es true  ----------
//  ------------------------------------------------------------------------------
export const LoadingMessage = ( {isLoading} ) => {

    return (

        <>
            { isLoading && <h2> Loading... </h2> }
        </>
    )
}


LoadingMessage.propTypes = {
    isLoading: PropTypes.bool.isRequired, // `isLoading` debe ser un booleano y es obligatorio
};
