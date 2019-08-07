import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "react-bootstrap";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
