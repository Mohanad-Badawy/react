import React from "react";
import Table from "@material-ui/core/Table";

function CustTable(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>;
      <Table  />
    </div>
  );
}

export default CustTable;
