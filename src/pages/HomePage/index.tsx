import React, { useState } from "react";
import { Box, Center, Pagination, Title } from "@mantine/core";
import useFetchCharacters from "../../hooks/queries/useFetchCharacters";
import Table from "../../components/Table";

const HomePage = () => {
  const [activePage, setActivePage] = useState(1);
  const [isPageChanged, setPageChanged] = useState(true);
  const { characters, isLoading, total } = useFetchCharacters({
    activePage,
    isPageChanged,
    setPageChanged,
  });

  const onPaginationChange = (value: number) => {
    console.log({ value });
    setActivePage(value);
    setPageChanged(true);
  };

  return (
    <Box>
      <Title
        order={1}
        mb="2rem"
        mt="2rem"
        style={{
          textAlign: "center",
          color: "crimson",
        }}
      >
        Marvel Characters
      </Title>
      <Table characters={characters} />
      <Center mt="2rem">
        <Pagination
          total={total}
          value={activePage}
          onChange={onPaginationChange}
        />
      </Center>
    </Box>
  );
};

export default HomePage;
