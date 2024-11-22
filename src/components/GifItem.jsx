//  ******************************************************************
//  **********  /gif-expert-app/src/components/GifItem.jsx  **********
//  ******************************************************************


import PropTypes from 'prop-types';


export const GifItem = ({ title, url }) => {

    return (

        <div className='card'>

            <p> {title} </p>
            <img src={url} alt={title} />

        </div>
    )
}


//  -----  Define los tipos de las props que el componente espera recibir  -----
GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
