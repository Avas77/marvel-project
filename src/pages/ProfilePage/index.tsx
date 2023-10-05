import React from "react";
import { useParams } from "react-router-dom";
import useFetchCharacterById from "../../hooks/queries/useFetchCharacterById";
import { Box, Flex, List, Text, Title } from "@mantine/core";

const ProfilePage = () => {
  const { cid } = useParams();
  const { character } = useFetchCharacterById(cid || "");
  const characterObj = character?.[0];
  console.log({ character, characterObj });
  return (
    <Box>
      <Title order={1}>Marvel Character</Title>
      <Flex>
        <Text>Name:</Text>
        <Text>{characterObj?.name}</Text>
      </Flex>
      <Flex>
        <Text>Description:</Text>
        <Text>{characterObj?.description}</Text>
      </Flex>
      <Flex>
        <Text>Comics Appeared:</Text>
        <List>
          {characterObj?.comics?.items?.map((comic: any) => (
            <List.Item>{comic.name}</List.Item>
          ))}
        </List>
      </Flex>
      <Flex>
        <Text>Series:</Text>
        <List>
          {characterObj?.series?.items?.map((series: any) => (
            <List.Item>{series.name}</List.Item>
          ))}
        </List>
      </Flex>
    </Box>
  );
};

export default ProfilePage;
