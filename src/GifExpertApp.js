import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Rick and Morty']);

  // const handleAdd = () => {
  //   setCategories(['Kimetzu No Yaiba', ...categories]);
  //   setCategories(cats => [...cats, inputValue]);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
          )
          )
        }
      </ol>
    </>
  )
}
