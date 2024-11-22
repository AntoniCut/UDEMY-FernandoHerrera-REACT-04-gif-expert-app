//  ************************************************************
//  **********  /gif-expert-app/src/GifExpertApp.jsx  **********
//  ************************************************************


import { useState } from "react";
import { AddCategory, Header, GifGrid } from "./components";


//  ----------------------------------------
//  ----------  Componente PADRE  ----------
//  ----------------------------------------
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
