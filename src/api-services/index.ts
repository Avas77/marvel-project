import axios from "axios";

const BASE_URL = "https://gateway.marvel.com";

const pubicHttpClient = axios.create({
  baseURL: `${BASE_URL}/v1/public/`,
});

const defaultParams = {
  ts: 1,
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
  hash: process.env.REACT_APP_MARVEL_HASH_KEY,
};

export const getCharacters = () => {
  return pubicHttpClient.get("characters", { params: defaultParams });
};
