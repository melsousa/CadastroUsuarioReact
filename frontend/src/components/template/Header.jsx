import "./Header.css";
import React from "react";

export default props =>
  <header className="header d-none d-sm-flex felx-column">
    <h1 className="mt-3">
      <i className={`fa fa-${props.icon}`}></i>
    </h1>
    <p className="lead text-muted"></p>
  </header>

