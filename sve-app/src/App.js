import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Backtotop from "./components/Backtotop";
import Home from "./pages/Home";
import About from "./pages/About";
// import Doctors from "./pages/Doctors";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Backtotop />
      <Home />
      <About />
      {/* <Doctors /> */}
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
