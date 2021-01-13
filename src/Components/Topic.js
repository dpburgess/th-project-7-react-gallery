import React, { Component } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";

const Topic = () => {
  return (
    <div className="topic-header group">
      <ul className="topic-nav">
        <li>
          <NavLink to="/trees">Trees</NavLink>
        </li>
        <li>
          <NavLink to="/space">Space</NavLink>
        </li>
        <li>
          <NavLink to="/arctic">Arctic</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Topic;
