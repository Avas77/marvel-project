import React from "react";
import { useQuery } from "react-query";
import { getCharacters } from "../../api-services";

const useFetchCharacters = () => {
  const { data, isLoading } = useQuery({
    queryKey: "characters",
    queryFn: () => {
      return getCharacters();
    },
  });
  return { characters: data?.data?.data?.results, isLoading };
};

export default useFetchCharacters;
