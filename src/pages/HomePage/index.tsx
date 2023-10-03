import React from "react";
import useFetchCharacters from "../../hooks/queries/useFetchCharacters";

const HomePage = () => {
  const { characters, isLoading } = useFetchCharacters();
  console.log({ characters });
  return <div>HomePage</div>;
};

export default HomePage;
