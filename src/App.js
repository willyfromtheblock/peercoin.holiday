import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import React from "react";
import MessageBoard from "./components/MessageBoard";
import MessageCard from "./components/MessageCard";

function App() {

  return (
    <div className="container-fluid overflow-hidden">
      {window.location.pathname.split('/')[1] === "card" ? <MessageCard /> :
        <MessageBoard />}
      <Footer />
    </div>
  );
}

export default App;
