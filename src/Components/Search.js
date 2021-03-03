import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Search extends Component {
  state = {
    searchTerm: "",
  };

  onSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
    let term = this.query.value;
    let path = `search/${term}`;
    e.currentTarget.reset();
    this.props.history.push(path)  // how does using this make the search results not work?
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input ref={(input) => this.query = input} type="text" name="search" placeholder="Search" onChange={this.onSearchChange}/>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default withRouter(Search);
