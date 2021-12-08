import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import React from "react";
import MessageBoard from "./components/MessageBoard";

function App() {
  console.log(window.location.pathname.split('/'));
  return (
    <div className="container-fluid overflow-hidden">
      <MessageBoard />
      <Footer />
    </div>
  );
}

export default App;
