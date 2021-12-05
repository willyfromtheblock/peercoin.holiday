import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import React, { useEffect, useState } from "react";

function App() {
  const [holidayMessages, setHolidayMessages] = useState([]);
  const [holidayMessagesTotal, setHolidayMessagesTotal] = useState(0);

  useEffect(() => {
    fetch('https://core.peercoin.holiday/total')
      .then(response => response.json())
      .then(data => setHolidayMessagesTotal(data));

    fetch('https://core.peercoin.holiday/messages/0')
      .then(response => response.json())
      .then(data => setHolidayMessages(data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid overflow-hidden">
      <Hero holidayMessagesTotal={parseInt(holidayMessagesTotal)} />
      <TimeLine holidayMessages={holidayMessages} />
      <Footer />
    </div>
  );
}

export default App;
