import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

const Transaction = ({ item }) => {
  let { timeStamp, from, to, confirmations, hash, value } = item;

  return (
    <TableRow>
      <TableCell align="center">
        {new Date(
          new Date(parseFloat(timeStamp) * 1000).getTime()
        ).toLocaleDateString()}
      </TableCell>
      <TableCell align="center">{from}</TableCell>
      <TableCell align="center">{to}</TableCell>
      <TableCell align="center">{value}</TableCell>
      <TableCell align="center">{confirmations}</TableCell>
      <TableCell align="center">{hash.substr(0, 50)}...</TableCell>
    </TableRow>
  );
};

export default Transaction;
