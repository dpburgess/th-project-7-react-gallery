import React from "react";

const Result = (props) => {
  return (
    <li className="result-img" key={props.id}>
      <img src={props.url} alt="image-text" />
    </li>
  );
};
