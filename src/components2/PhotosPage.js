import React, { Component } from "react";
import PhotoComp from "./PhotoComp";

export default class PhotosPage extends Component {
  state = {
    photos: [
      {
        img: "https://picsum.photos/id/1032/240/160",
        like: 23,
        dislike: 2,
        myOption: "",
      },
      {
        img: "https://picsum.photos/id/1051/240/160",
        like: 8,
        dislike: 0,
        myOption: "",
      },
      {
        img: "https://picsum.photos/id/1079/240/160",
        like: 83,
        dislike: 37,
        myOption: "dislike",
      },
      {
        img: "https://picsum.photos/id/1084/240/160",
        like: 19,
        dislike: 1,
        myOption: "like",
      },
      {
        img: "https://picsum.photos/id/122/240/160",
        like: 77,
        dislike: 16,
        myOption: "like",
      },
      {
        img: "https://picsum.photos/id/164/240/160",
        like: 6,
        dislike: 3,
        myOption: "",
      },
    ],
  };

  handleLike = (index) => {
    let copyOfState = { ...this.state };
    let photo = copyOfState.photos[index];
    let { like, dislike, myOption } = photo;

    //if i already liked the photo, clicking again removes it from my likes
    if (myOption === "like") {
      like--;
      myOption = "";
    }
    //if i already disliked a photo, clicking it again removes my dislike and adds a like
    else if (myOption === "dislike") {
      like++;
      dislike--;
      myOption = "like";
    }
    //if i havent liked/disliked picture before, increase like, change myOption to like
    else {
      like++;
      myOption = "like";
    }
    photo.like = like;
    photo.dislike = dislike;
    photo.myOption = myOption;
    this.setState({ copyOfState });
  };

  handleDislike = (index) => {
    let copyOfState = { ...this.state };
    let photo = copyOfState.photos[index];
    let { like, dislike, myOption } = photo;

    //if i already disliked the photo, clicking again removes it from my likes
    if (myOption === "dislike") {
      dislike--;
      myOption = "";
    }
    //if i already liked a photo, clicking it again removes my like and adds a dislike
    else if (myOption === "like") {
      like--;
      dislike++;
      myOption = "dislike";
    }
    //if i havent dislike or liked the picture before, increase dislike, change myOption to dislike
    else {
      dislike++;
      myOption = "dislike";
    }
    photo.like = like;
    photo.dislike = dislike;
    photo.myOption = myOption;
    this.setState({ copyOfState });
  };

  render() {
    const { photos } = this.state;

    return (
      <div className="container">
        <div className="row">
          {photos.map((photo, index) => {
            return (
              <PhotoComp
                key={Math.random()}
                photo={photo}
                index={index}
                // in main component when passing functions as prop, dont use arrow function
                onLike={this.handleLike}
                onDislike={this.handleDislike}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
