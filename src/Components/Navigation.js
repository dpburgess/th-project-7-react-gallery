import React, { Component } from "react";
import Topic from "./Topic";
import Search from "./Search";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="main-header">
          <h1>This is a header</h1>
          <Search />
          <Topic />
        </div>
      </div>
    );
  }
}
