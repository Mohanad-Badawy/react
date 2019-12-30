import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

function CustTable(props) {
  console.log("props ", props);

  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  function reMapcolumns() {
    console.log("columns ", props.columns);
    Object.keys(props.columns).map(column =>
      setColumns(columns => [
        ...columns,

        {
          title: props.columns[column].label,
          field: props.columns[column].code.split(".")[1],
          filtering: props.columns[column].filterable,
          sorting: props.columns[column].sortable
        }
      ])
    );
  }

  function reMapRows() {
    console.log("gggg", props.value.result.rows);

    props.value.result.rows.forEach(function(row, index) {
      console.log("row .. ", index, row);
      let record = [{}];
      //let cells = new Map();
      for (var cell in row) {
        //record.set("REQUEST_ID","test");
        //console.log("record h.fffhhh", cell.split(".")[1], row[cell]);
        // record.push({ REQUEST_ID1: "test" });
        // cells.set(cell.split(".")[1], row[cell]);
        record[cell.split(".")[1]] = row[cell];
        // record[0]["key31"] = "value31";





       // console.log("record hhhh --", cells);


       // record.push(cells);
        console.log("record hhhh");
      }
      console.log("REQUEST_ID ", JSON.stringify(record));
      setRows(rows => [...rows, record]);
    });

    console.log("after adding ", rows);
  }

  useEffect(() => {
    reMapcolumns();
    reMapRows();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.columns]);

  return (
    <div style={{ maxWidth: "100%" }}>
      <div> {JSON.stringify(rows)} </div>
      <div> {JSON.stringify(columns)} </div>
      <MaterialTable
        title="table .."
        columns={columns}
        data={rows}
        options={{
          filtering: true,
          sorting: true
        }}
      />
      <h1>Hello</h1>;
    </div>
  );
}

export default CustTable;
