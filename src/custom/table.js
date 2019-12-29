import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

function CustTable(props) {
  console.log("props ", props);

  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  function reMapcolumns() {
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

    Object.keys(props.value.result.rows).map(row =>
      setRows(rows => [
        ...rows,

        // ()=> row.map(cell => {
        //   REQUEST_ID: "tablesss";

        // })
{
        Object.keys(row).map(cell => {

          REQUEST_ID: "test";
         // console.log("----s ", cell);
        }
        
      }
        
        
        )
      ])
    );
  }

  useEffect(() => {
    reMapcolumns();
    reMapRows();
    console.log("hjkgjk", columns);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.columns]);

  return (
    <div style={{ maxWidth: "100%" }}>
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
