import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "../styles.css";

function CustTable(props) {
  console.log("props ", props);

  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  function reMapcolumns() {
    console.log("columns ", props.columns);
    setColumns([]);
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
    console.log("...................................................");
    setRows([]);
    props.value.result.rows.forEach(function(row, index) {
      let record = [{}];
      for (var cell in row) {
        record[cell.split(".")[1]] = row[cell];
      }
      console.log("record .. ", JSON.stringify(record));
      setRows(rows => [...rows, record]);
    });
  }

  useEffect(() => {
    reMapcolumns();
    reMapRows();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.columns, props.value.rows]);

  return (
    <div style={{ maxWidth: "70%", display: "inline-block" }}>
      {columns == null ? (
        "loading ..."
      ) : (
        <MaterialTable
          title="table .."
          columns={columns}
          data={rows == null ? [] : rows}
          options={{
            filtering: true,
            sorting: true,
            rowStyle: x => {
              if (x.tableData.id % 2) {
                return { backgroundColor: "#f2f2f2", boarder: "2px solid" };
              }
            },
            headerStyle: {
              backgroundColor: "#ddd"
            }
          }}
        />
      )}
      ;
    </div>
  );
}

export default CustTable;
