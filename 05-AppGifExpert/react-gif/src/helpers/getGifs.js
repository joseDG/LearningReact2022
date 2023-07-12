export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=JaYNzQ5Afu20IA7BNDT3SlHJTsWArZHc&q=${category}&limit=10`;
  const respuesta = await fetch(url);
  const {data} = await respuesta.json();

  // console.log(resultado.data)

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};
