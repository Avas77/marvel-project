import axios from "axios";

const BASE_URL = "https://gateway.marvel.com";

const publicHttpClient = axios.create({
  baseURL: `${BASE_URL}/v1/public/`,
});

const defaultParams = {
  ts: 1,
  apikey: process.env.REACT_APP_MARVEL_API_KEY,
  hash: process.env.REACT_APP_MARVEL_HASH_KEY,
};

export const getCharacters = (page: number, query: string) => {
  return publicHttpClient.get("characters", {
    params: {
      ...defaultParams,
      offset: page,
      nameStartsWith: query ? query : undefined,
    },
  });
};

export const getCharacterById = (id: string) => {
  return publicHttpClient.get(`characters/${id}`, {
    params: defaultParams,
  });
};
