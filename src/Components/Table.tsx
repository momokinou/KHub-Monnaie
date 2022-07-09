import { Checkbox, Navbar, Table, Text } from "@mantine/core";
import { useContext, useState } from "react";

function CustomTable() {

  interface Purchase { id: number; name: string; montant: number; useless: boolean; category: string; buyDate: string; };

  const [elements, setElements] = useState([
    {
      "id": 1,
      "name": "casserole",
      "montant": 30.3,
      "useless": false,
      "category": "cuisine",
      "buyDate": "2014-06-25T00:00:00.000Z"
    },
    {
      "id": 2,
      "name": "casserole",
      "montant": 30.3,
      "useless": false,
      "category": "cuisine",
      "buyDate": "2014-06-25T00:00:00.000Z"
    }
  ]);

  function handleChange(e: Purchase) {

    const newState = elements.map(obj => {
      if (obj.id === e.id) {
        return { ...obj, useless: !obj.useless };
      }
      return obj;
    });

    if (newState !== undefined) {
      setElements(newState);
    }

  }

  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.name}</td>
      <td>{element.montant}</td>
      <td>{element.category}</td>
      <td>{element.buyDate}</td>
      <Checkbox checked={element.useless} onChange={() => handleChange(element)} />
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Montant</th>
          <th>Catégorie</th>
          <th>Date</th>
          <th>Inutile?</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );

}

export default CustomTable;