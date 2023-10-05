import React from "react";
import { useParams } from "react-router-dom";
import useFetchCharacterById from "../../hooks/queries/useFetchCharacterById";
import { Accordion, Box, Center, Flex, List, Text, Title } from "@mantine/core";
import classes from "./styles.module.css";

const ProfilePage = () => {
  const { cid } = useParams();
  const { character } = useFetchCharacterById(cid || "");
  const characterObj = character?.[0];

  return (
    <Box>
      <Title
        order={1}
        style={{
          textAlign: "center",
          color: "crimson",
        }}
        mt="4rem"
        mb="2rem"
      >
        {characterObj?.name}
      </Title>
      <Center>
        <Accordion
          style={{
            width: "80%",
          }}
          classNames={{
            control: classes.header,
          }}
          mt="2rem"
        >
          <Accordion.Item value="Description">
            <Accordion.Control>Description</Accordion.Control>
            <Accordion.Panel>{characterObj?.description}</Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Comics">
            <Accordion.Control>Comics</Accordion.Control>
            <Accordion.Panel>
              <List>
                {characterObj?.comics?.items?.map((comic: any) => (
                  <List.Item>{comic.name}</List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="Series">
            <Accordion.Control>Series</Accordion.Control>
            <Accordion.Panel>
              <List>
                {characterObj?.comics?.items?.map((comic: any) => (
                  <List.Item>{comic.name}</List.Item>
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Center>
    </Box>
  );
};

export default ProfilePage;
