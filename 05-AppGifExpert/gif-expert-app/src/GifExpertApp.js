//crear el archivo rafc

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categorias, setCategories] = useState(['Dragon Ball']);

    //const handleAdd = () => {
   //setCategories(['HunterXHunter', ...categorias]);
  //setCategories( categoria => [...categoria, 'HunterXHunter']);
 //}

  return (
    <>
        <h2 className='animate__fadeInTopRight'>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />

        <ol>
            {
              categorias.map(category => (
                  <GifGrid
                    key={ category} 
                    category={ category }
                  />
              ))
            }
        </ol>
    </>
  )
}
