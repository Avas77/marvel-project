import React, { useState } from "react";
import {
  Box,
  Center,
  Loader,
  Pagination,
  TextInput,
  Title,
} from "@mantine/core";
import useFetchCharacters from "../../hooks/queries/useFetchCharacters";
import Table from "../../components/Table";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [isPageChanged, setPageChanged] = useState(true);
  const { characters, isLoading, total } = useFetchCharacters({
    activePage,
    isPageChanged,
    setPageChanged,
    query,
  });

  const onPaginationChange = (value: number) => {
    console.log({ value });
    setActivePage(value);
    setPageChanged(true);
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPageChanged(true);
    setQuery(event.currentTarget.value);
  };

  if (isLoading) {
    return (
      <Center
        style={{
          height: "100vh",
        }}
      >
        <Loader />
      </Center>
    );
  }

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
      <Center mb="3rem">
        <TextInput
          value={query}
          onChange={onSearchChange}
          style={{
            width: "30rem",
          }}
          placeholder="Search Character"
        />
      </Center>
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
