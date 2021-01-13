import React, { Component } from "react";

export default class Search extends Component {
  state = {
    searchTerm: "",
  };

  render() {
    return (
      <form className="search-bar">
        <input type="text" name="image-search" placeholder="Search" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
