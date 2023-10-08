
import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

  return (
    <>
        <h3>{ category }</h3>

        <div>
            <ol className='card-grid'>
                {
                    images.map( img =>
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    )
                }
            </ol>
        </div>
    </>
  )
}