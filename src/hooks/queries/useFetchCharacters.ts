import React from "react";
import { useQuery } from "react-query";
import { getCharacters } from "../../api-services";

interface IProps {
  activePage: number;
  isPageChanged: boolean;
  setPageChanged: (value: boolean) => void;
  query: string;
}

const useFetchCharacters = ({
  activePage,
  isPageChanged,
  setPageChanged,
  query,
}: IProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["characters", query],
    queryFn: () => {
      return getCharacters(activePage, query);
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
