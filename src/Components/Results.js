import React, { Component } from "react";
import Result from "./Result"
import NoResults from "./NoResults"
import { withRouter } from "react-router-dom";

class Results extends Component {
  // captureUrl = () => {
  //   let pathname = window.location.href;
  //   this.setState({
  //     path: pathname
  //   });
  // }


  // componentDidUpdate(prevProps, prevState){
  //   console.log(prevProps);
  //   console.log(prevState);
  //   console.log(this.props);
  //   if (prevProps.match.url !== this.props.match.url) {
  //     let term = this.props.match.params.term
  //     this.props.search(term);
  //   }
    
  //   // do I need to update state from here back to app.js?
  // }

  render() {
    //this.captureUrl();
    //const { term } = useParams();
    const collection = this.props.query;
    //console.log('term ' + term);

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


}

// could use useEffect and the new state method
// to save the url path and compare the new url to the previous one
// 

// const Results = (props) => {
//   const collection = props.query;
//   console.log(collection);
  
//   let images;
//   if (collection.length > 0) {
//   images = collection.map((image) => (
//     <Result key={image.id} url={image} />
//   ));
//   } else {
//     images = <NoResults />
//   }

//   console.log(images);
//     return (
//     <div className="photo-container">
//       <ul className="image-list">{images}</ul>;
//     </div>
//     )
// }

export default withRouter(Results);