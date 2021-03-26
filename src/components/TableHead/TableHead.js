import React from "react";
import { TableHead as Thead, TableRow, TableCell } from "@material-ui/core";

const TableHead = ({ classes }) => {
  return (
    <Thead>
      <TableRow>
        <TableCell className={classes.head} align="center">
          Date
        </TableCell>
        <TableCell className={classes.head} align="center">
          From
        </TableCell>
        <TableCell className={classes.head} align="center">
          To
        </TableCell>
        <TableCell className={classes.head} align="center">
          Value
        </TableCell>
        <TableCell className={classes.head} align="center">
          Confirmations
        </TableCell>
        <TableCell className={classes.head} align="center">
          Hash
        </TableCell>
      </TableRow>
    </Thead>
  );
};

export default TableHead;
