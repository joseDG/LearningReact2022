import GifItem from "./GifItem";
import useFetchGifs from "../hook/useFetchGifs";
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {

  const { images, setImages } = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages)
  }

  useEffect(() => {
    getImages();
  },[])

  return (
    <>
      <h3>{category}</h3>
      {/* {isLoading && <h2>Cargando...</h2>} */}

      <div className="card-grid">
        {
          images & images.map((image) => (
            <GifItem 
              key={image.id} 
              {...image} 
            />
          ))
        }
      
      </div>
    </>
  );
};

export default GifGrid;
