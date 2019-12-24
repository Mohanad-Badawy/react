import React, { useState, useEffect } from "react";
import CustTable from "./table";
import axios from "axios";

function CustPanel() {
  const [dataTbl, setDataTbl] = useState(null);

  async function fetchUrl() {
    await axios
      .get("https://www.mocky.io/v2/5e01b7d42f00007e00dcd285")
      //  .then(response => console.log(response.data))
      .then(
        response => {
          console.log("log --{}", response.data);
          setDataTbl(response.data);
          console.log("dataTbl Loaded ...");
        },
        error => {
          console.log("--> ", error);
        }
      )
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      })
      .finally(() => {
        console.log("finally dataTbl ", dataTbl);
      });
  }

  // init call only one time
  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {dataTbl == null ? (
        "loading"
      ) : (
        <CustTable name={dataTbl.responseCode} value={dataTbl} />
      )}
    </div>
  );
}

export default CustPanel;
