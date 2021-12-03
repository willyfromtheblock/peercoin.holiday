import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import React, { useEffect, useState } from "react";

function App() {
  const [holidayMessages, setHolidayMessages] = useState([]);

  var exampleSocket = new WebSocket(
    "wss://electrum.peercoinexplorer.net:50004"
  );

  function hex2bin(hex) {
    var bytes = [];
    for (var i = 0; i < hex.length - 1; i += 2)
      bytes.push(parseInt(hex.substr(i, 2), 16));

    return String.fromCharCode.apply(String, bytes);
  }

  const sendMessage = (id, method, params) => {
    var msg = {
      id: id,
      method: method,
      params: params,
    };
    //
    exampleSocket.send(JSON.stringify(msg));
  };

  useEffect(() => {
    exampleSocket.onopen = () => {
      sendMessage("history", "blockchain.scripthash.get_history", [
        "7e5018315cb12dd8c073a95eb863206f51ce88a14fc102efeeac605c71134641",
      ]);
    };
    // eslint-disable-next-line
  }, []);

  exampleSocket.onmessage = (event) => {
    var answer = JSON.parse(event.data);
    if (answer["id"] === "history") {
      answer["result"].forEach((element) => {
        //request details for those tx
        sendMessage("tx_" + element["tx_hash"], "blockchain.transaction.get", [
          element["tx_hash"],
          true,
        ]);
      });
    } else if (answer["id"].includes("tx_")) {
      answer["result"]["vout"].forEach((element) => {
        if (element["scriptPubKey"]["asm"].includes("OP_RETURN")) {
          var message = hex2bin(
            element["scriptPubKey"]["asm"].split("OP_RETURN ")[1]
          );

          let old = holidayMessages;
          old.push({
            date:
              answer["result"]["time"] == 0
                ? new Date() / 1000
                : answer["result"]["time"],
            transactionId: answer["result"]["txid"],
            text: message,
          });
          setHolidayMessages([...old]);
        }
      });
    }
  };

  return (
    <div className="container-fluid overflow-hidden">
      <Hero holidayMessagesLength={holidayMessages.length} />
      <TimeLine holidayMessages={holidayMessages} />
      <Footer />
    </div>
  );
}

export default App;
