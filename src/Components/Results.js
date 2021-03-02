import React from "react";
import Result from "./Result"
import NoResults from "./NoResults"
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Results = (props) => {
  const { term } = useParams();
  console.log(term);

  const collection = props.query;
  console.log(collection);
  
  //const value = props.match.params.query;
  //console.log(props);
  
  //let items = props.onChange(term)
  //console.log(value);
  let images;
  if (collection.length > 0) {
  images = collection.map((image) => (
    <Result key={image.id} url={image} />
  ));
  } else {
    images = <NoResults />
  }

  console.log(images);
    return (
    <div className="photo-container">
      <ul className="image-list">{images}</ul>;
    </div>
    )
}

export default Results;
//export default withRouter(Results);