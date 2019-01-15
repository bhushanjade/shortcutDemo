import React from "react";
import "./styles.css";
export default function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Shortcuts Demo</h1>
      </header>
      <p className="App-intro">
        Navigate shortcuts using individual Tabs shortcuts
        <h6>or</h6>
        <h5>
          Use <code>CTRL+SHIFT+Y</code> jump to the next tab{" & "}
          <code>CTRL+SHIFT+Z</code> jump to the previous tab
        </h5>
      </p>
    </div>
  );
}
