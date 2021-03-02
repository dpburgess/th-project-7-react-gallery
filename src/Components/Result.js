import React from "react";

const Result = (props) => {
  let url = `https://live.staticflickr.com/${props.url.server}/${props.url.id}_${props.url.secret}_n.jpg`;
  return (
    <li className="result-img">
      <img src={url} alt="" />
    </li>
  );
};

export default Result;
