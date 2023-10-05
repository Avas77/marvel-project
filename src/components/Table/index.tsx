import { Box, Table } from "@mantine/core";
import classes from "./styles.module.css";
import { ICharacters } from "../../interfaces/ICharacters";
import { useNavigate } from "react-router-dom";

interface IProps {
  characters: ICharacters[];
}

const CustomTable = ({ characters }: IProps) => {
  const navigate = useNavigate();

  const movetoNextPage = (characterId: number) => {
    navigate(`/character/${characterId}`);
  };

  const rows = characters?.map((character) => (
    <Table.Tr
      className={classes.row}
      onClick={() => movetoNextPage(character.id)}
      key={character.id}
    >
      <Table.Td className={classes.data}>{character.name}</Table.Td>
      <Table.Td className={classes.data}>{character.description}</Table.Td>
      <Table.Td className={classes.data}>
        <a href={character.thumbnail.path}>{character.thumbnail.path}</a>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Box className={classes.tableContainer}>
      <Table className={classes.table}>
        <Table.Thead className={classes.tableHeadGroup}>
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
