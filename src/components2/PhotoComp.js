import React, { Component } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";

export default class PhotoComp extends Component {
  bgColor = (param) =>
    param === "like" ? "red" : param === "dislike" ? "gray" : "white";

  render() {
      const { photo, index, onLike, onDislike } = this.props;
      const { img, like, dislike, myOption } = photo;
      
    return (
      <div className={this.bgColor(myOption)}>
        <img src={img} alt="img"></img>
        <br />
        {/* if option is set to like display colored in icon, otherwise show outline */}
        <span className="stats" onClick={()=>onLike(index)}>
          {myOption === "like" ? <FaHeart /> : <FaRegHeart />}
          {like}{" "}
        </span>
        <span className="stats" onClick={()=>onDislike(index)}>
          {myOption === "dislike" ? <FaThumbsDown /> : <FaRegThumbsDown />}
          {dislike}
        </span>
      </div>
    );
  }
}
