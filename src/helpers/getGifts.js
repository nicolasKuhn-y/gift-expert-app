const API_KEY = "59vCqbdbVzjPTDnePiRxkEVD7AeE1kBx";

export const getGiftsFromGiphy = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${API_KEY}`;
  const res = await fetch(url);
  const { data } = await res.json();

  return data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_large.url,
  }));
};
