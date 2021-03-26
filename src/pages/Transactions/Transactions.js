import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableBody,
  TablePagination
} from "@material-ui/core";
import uuid from "react-uuid";

import { useFetch } from "../../hooks/useFetch";
import TableHead from "../../components/TableHead/TableHead";
import Transaction from "../../components/Transaction/Transaction";
import { useStyles } from "../../components/Transaction/styles";
import Spinner from "../../components/Spinner/Spinner";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { fetchHandler } = useFetch();

  const classes = useStyles();

  useEffect(() => {
    fetchHandler(process.env.REACT_APP_API_KEY)
      .then((res) => {
        setTransactions(res.result.sort(() => -1));
      })
      .catch((err) => console.log(err));
  }, [fetchHandler]);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {transactions?.length === 0 ? (
        <Spinner />
      ) : (
        <TableContainer component={Paper} variant="outlined">
          <Table stickyHeader aria-label="transactions table">
            <TableHead classes={classes} />

            <TableBody>
              {transactions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <Transaction key={uuid()} item={item} />
                ))}
            </TableBody>
          </Table>

          <TablePagination
            className={classes.pagination}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={transactions.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </>
  );
};

export default Transactions;
