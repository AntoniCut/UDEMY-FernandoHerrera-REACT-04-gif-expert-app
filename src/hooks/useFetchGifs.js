//  *****************************************************************
//  **********  /gif-expert-app/src/hooks/useFetchGifs.js  **********
//  *****************************************************************


import { useEffect, useState } from 'react';
import { getGifs } from '../helper/getGifs';


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
