import React, { useState, useEffect, Component } from "react";
import MaterialTable from "material-table";

function CustTable(props) {
  console.log("sssss", props);
  const [columns, setColumns] = useState([]);

  const [data, setData] = useState({
    data: [
      { REQUEST_ID: "Mehmet", surname: "Baran" },
      {
        PARTY_ID: "Zerya Betül",
        surname: "Baran"
      }
    ]
  });

  function reMapcolumns() {
    Object.keys(props.columns).map(column =>
      // setColumns([columns, column])
      // columns.push({
      //   title: props.columns[column].label,
      //   field: props.columns[column].code.split(".")[1]
      // })

      setColumns(columns => [
        ...columns,

        {
          title: props.columns[column].label,
          field: props.columns[column].code.split(".")[1]
        }
      ])
    );

    console.log("hjhhhhh", columns);
  }

  useEffect(() => {
    reMapcolumns();
    console.log("hjkgjk", columns);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.columns]);

  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable title="table .." columns={columns} />
      <h1>Hello</h1>;
    </div>
  );
}

export default CustTable;
