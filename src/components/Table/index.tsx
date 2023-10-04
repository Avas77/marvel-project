import React from "react";
import { Box, Table } from "@mantine/core";
import classes from "./styles.module.css";
import { ICharacters } from "../../interfaces/ICharacters";

interface IProps {
  characters: ICharacters[];
}

const CustomTable = ({ characters }: IProps) => {
  const rows = characters?.map((character) => (
    <Table.Tr className={classes.row}>
      <Table.Td className={classes.data}>{character.name}</Table.Td>
      <Table.Td className={classes.data}>{character.description}</Table.Td>
      <Table.Td className={classes.data}>
        <a href={character.thumbnail.path}>{character.thumbnail.path}</a>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Box
      style={{
        width: "100%",
        overflowX: "auto",
        overflowY: "visible",
        position: "relative",
      }}
    >
      <Table
        style={{
          width: "100%",
          borderRadius: "0.8rem",
          border: "none",
          borderSpacing: 0,
        }}
      >
        <Table.Thead
          style={{
            background: "#F5F7FC",
            borderLeft: "1px solid #E6E9F0",
          }}
        >
          <Table.Tr>
            <Table.Th className={classes.tableHead}>Name</Table.Th>
            <Table.Th className={classes.tableHead}>Description</Table.Th>
            <Table.Th className={classes.tableHead}>Thumbnails</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Box>
  );
};

export default CustomTable;
