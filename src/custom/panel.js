import React, { useState, useEffect } from "react";
import CustTable from "./table";
import axios from "axios";

function CustPanel() {
  const [metaData, setMetaData] = useState(null);
  const [dataTbl, setDataTbl] = useState(null);
  const service = "https://www.mocky.io/v2/5e01b7d42f00007e00dcd285";
  const serviceMetaData = "https://www.mocky.io/v2/5e01f8e62f0000b091dcd493";

  //to do function need to be intilized only once
  async function fetchData() {
    await axios
      .get(service)
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

  async function fetchMetaData() {
    /*await */ axios
      .get(serviceMetaData)
      //  .then(response => console.log(response.data))
      .then(
        response => {
          console.log("serviceMetaData response ", response.data);
          setMetaData(response.data);
          console.log("Meta data Loaded ...");
        },
        error => {
          console.log("--> ", error);
        }
      )
      .catch(error => {
        console.log("Error fetching and parsing Meta Data", error);
      })
      .finally(() => {
        console.log("finally MetaData ", metaData);
      });
  }

  // init call only one time
  useEffect(() => {
    fetchMetaData();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {(metaData == null) | (dataTbl == null) ? (
        "loading"
      ) : (
        <CustTable columns={metaData.columns} value={dataTbl} />
      )}
    </div>
  );
}

export default CustPanel;
