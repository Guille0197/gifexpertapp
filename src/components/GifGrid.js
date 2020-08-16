// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';

export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>loading...</p>}

      <div className="card-grid">
        {
          images.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
