//  ******************************************************************
//  **********  /gif-expert-app/src/components/GifGrid.jsx  **********
//  ******************************************************************


import PropTypes from 'prop-types';
import { GifItem, LoadingMessage } from '../components';
import { useFetchGifs } from '../hooks/useFetchGifs';


//  ----------------------------------------
//  ----------  Renderiza un GIF  ----------
//  ----------------------------------------
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