import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./Tabs.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-12">
          <Tabs />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
