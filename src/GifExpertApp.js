import { useState } from "react";
import React from "react";
import { AddCategory } from "./Componentes/AddCategory";
import { GifGrid } from "./Componentes/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

/* 
    const handleAdd = (e) => {
        setCategories( [ ...categories, 'Naruto'] );
    }
 */

    return (
        <>
            <h2 className='animate__animated animate__rubberBand'>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                { 
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />
                ))
                }
            </ol>
        </>
    );

};
