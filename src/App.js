import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "./components/common/loader";

function App() {
  const [holidayMessages, setHolidayMessages] = useState([]);
  const [messagesAvailable, setMessagesAvailable] = useState(0);
  const [hasMore, setMore] = useState(true);
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    fetch('https://core.peercoin.holiday/total')
      .then(response => response.json())
      .then(data => setMessagesAvailable(data))
      .then(fetchMessages(0));
    // eslint-disable-next-line
  }, []);

  const fetchMessages = async scroll => {
    await fetch(`https://core.peercoin.holiday/messages/${scroll}`)
      .then(response => response.json())
      .then(data => {
        const mergedData = holidayMessages.concat(data);
        setHolidayMessages(mergedData)
      });

    setCurrentScroll(scroll);
  };

  const loadMore = async () => {
    if (currentScroll + 15 > messagesAvailable && messagesAvailable !== 0) {
      setMore(false);
    } else {
      const newScroll = parseInt(currentScroll) + 15;
      await fetchMessages(messagesAvailable === 0 ? "0" : newScroll);
    }
  };

  return (
    <div className="container-fluid overflow-hidden">
      <Hero holidayMessagesTotal={parseInt(messagesAvailable)} />
      {holidayMessages.length > 0 &&
        <InfiniteScroll
          pageStart={0}
          loadMore={() => loadMore()}
          hasMore={hasMore}
          threshold={500}
          loader={<Loader key={"spinner"} />}
        >
          <TimeLine holidayMessages={holidayMessages} />
        </InfiniteScroll>}
      <Footer />
    </div>
  );
}

export default App;
