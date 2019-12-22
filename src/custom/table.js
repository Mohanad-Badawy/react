import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function CustTable(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>;
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow />
          </TableHead>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustTable;
