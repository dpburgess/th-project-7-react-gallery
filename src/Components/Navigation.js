import React, { Component } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
//import Topic from "./Topic";
//import Search from "./Search";

export default class Navigation extends Component {
  state = {
    searchTerm: "",
  };

  render() {
    return (
      <div className="main-nav">
        <ul>
          <li>
            <NavLink to="/search/trees">Trees</NavLink>
          </li>
          <li>
            <NavLink to="/search/space">Space</NavLink>
          </li>
          <li>
            <NavLink to="/search/arctic">Arctic</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
