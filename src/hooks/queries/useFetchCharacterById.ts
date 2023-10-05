import React from "react";
import { useQuery } from "react-query";
import { getCharacterById } from "../../api-services";

const useFetchCharacterById = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["characters", id],
    queryFn: () => {
      return getCharacterById(id);
    },
  });
  return {
    character: data?.data?.data?.results,
    isLoading,
  };
};

export default useFetchCharacterById;
