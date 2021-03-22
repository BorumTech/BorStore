import React from "react";

export default function Product(props) {
    const site = "https://" + (props.link ?? props.id) + ".borumtech.com/";
    const imgSrc = props.img ?? "images/icon.png";
    return (
      <div id={props.id} className="col-sm-4">
        <a target="_blank" rel="noopener noreferrer" href={site}>
          <img src={"/" + imgSrc} alt={props.name + "logo"}/>
          <span>  {props.name}</span>
        </a>
      </div>
    );
}