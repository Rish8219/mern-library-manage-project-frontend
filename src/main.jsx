// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./main.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
// import axios from "axios";
// axios.defaults.withCredentials = true;

// export const backend_server = `http://localhost:5000`;

// ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
// <React.StrictMode>
// </React.StrictMode>
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Adjust the import based on your file structure
import "./main.css"; // Your main CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.js"; // Bootstrap JS
import axios from "axios";

axios.defaults.withCredentials = true; 

export const backend_server = `http://localhost:5000`; 


const rootElement = document.getElementById("root");


const root = ReactDOM.createRoot(rootElement);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
