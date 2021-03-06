import React, { Component } from "react";
import Result from "./Result"
import NoResults from "./NoResults"
import { withRouter } from "react-router-dom";

class Results extends Component {
  render() {
    const {location} = this.props;  // uses withRouter to get the current url path
    const collection = this.props.query;
    let searchTerm = location.pathname.split("/")[2];  // finds the search term from the url to use it in the page title

    let images;
    if (collection.length > 0) {
    images = collection.map((image) => (
      <Result key={image.id} url={image} />
    ));
    } else {
      images = <NoResults />
    }

      return (
      <div>
        <div>
          <h3>{searchTerm} Images</h3>
        </div>  
        <div className="photo-container">
          <ul className="image-list">{images}</ul>
        </div>
      </div>
      )
  }
}

export default withRouter(Results);