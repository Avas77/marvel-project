import React from "react";
import { useQuery } from "react-query";
import { getCharacters } from "../../api-services";

interface IProps {
  activePage: number;
  isPageChanged: boolean;
  setPageChanged: (value: boolean) => void;
}

const useFetchCharacters = ({
  activePage,
  isPageChanged,
  setPageChanged,
}: IProps) => {
  console.log("inside Hook", activePage);
  const { data, isLoading } = useQuery({
    queryKey: "characters",
    queryFn: () => {
      return getCharacters(activePage);
    },
    enabled: isPageChanged,
    onSuccess: () => {
      setPageChanged(false);
    },
  });
  return {
    characters: data?.data?.data?.results,
    isLoading,
    total: data?.data?.data?.total,
  };
};

export default useFetchCharacters;
