import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Components/Button";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <Button />
    </>
  </React.StrictMode>
);

reportWebVitals();
