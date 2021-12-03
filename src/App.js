import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TimeLine from "./components/TimeLine";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import holidayMessages from "./data/death_certificates.json";

function App() {
  return (
    <div className="container-fluid overflow-hidden">
      <Hero holidayMessages={holidayMessages} />
      <TimeLine orbituaries={holidayMessages} />
      <Footer />
    </div>
  );
}

export default App;
