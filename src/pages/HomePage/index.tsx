import React from "react";
import { Box } from "@mantine/core";
import useFetchCharacters from "../../hooks/queries/useFetchCharacters";
import Table from "../../components/Table";

const HomePage = () => {
  const { characters, isLoading } = useFetchCharacters();
  console.log({ characters });
  return (
    <Box>
      <Table characters={characters} />
    </Box>
  );
};

export default HomePage;
