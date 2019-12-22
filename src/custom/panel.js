import React, { useEffect, useState } from "react";
import CustTable from "./table";
import axios from "axios";

function CustPanel() {
  const [dataTbl, setDataTbl] = useState([]);

  async function fetchUrl() {
    await axios
      .get("https://www.mocky.io/v2/5dfb3ef62f00006200ff9d62")
      .then(
        response => {
          setDataTbl(response.data);
          console.log("log --" + dataTbl);
        },
        error => {
          console.log("--> " + error);
        }
      )
      .finally(() => {
        console.log("finally dataTbl" + dataTbl);
      });
  }

  useEffect(() => {
    fetchUrl();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Start edit ing to see some magic happen!</h2>
      <CustTable name="name" />
    </div>
  );
}

export default CustPanel;
