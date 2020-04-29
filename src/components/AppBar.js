import React from "react";
import { ReactComponent as InfoIcon } from "../assets/info-circle.svg";
import { withRouter } from "react-router-dom";

const AppBar = (props) => {
  return (
    <div className="app-bar flex jcsb">
      <p onClick={() => props.history.push("/")}>Todo List</p>
      <div className="icon-btn" onClick={() => props.history.push("/info")}>
        <InfoIcon style={{ width: 20, fill: "#fff" }} />
      </div>
    </div>
  );
};

export default withRouter(AppBar);
