import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function CustTable(props) {
  console.log("sssss", props);
  return (
    <div>
      <h1>Hello,</h1>;
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(props.columns).map(attr => (
                <TableCell align="right">
                  {" "}
                  {props.columns[attr].code}{" "}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {props.value.result.rows.map(row => (
              <TableRow key={row.name}>
                {Object.keys(row).map(column => (
                  <TableCell align="right"> {row[column]} </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CustTable;
