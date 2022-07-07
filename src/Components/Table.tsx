import { Checkbox, Navbar, Table, Text } from "@mantine/core";
import { useContext, useState } from "react";

function CustomTable() {

    const elements = [
        {
          "id": 1,
          "name": "casserole",
          "montant": 30.3,
          "useless": false,
          "category": "cuisine",
          "buyDate": "2014-06-25T00:00:00.000Z"
        }
      ];

      const rows = elements.map((element) => (
        <tr key={element.id}>
          <td>{element.name}</td>
          <td>{element.montant}</td>
          <td>{element.category}</td>
          <td>{element.buyDate}</td>
          <td><Checkbox checked={element.useless}/></td>
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