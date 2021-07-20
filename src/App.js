import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    // store the api data inside my state
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = () => {
    // fetch api request for data
    // wait until component has mounted on virtual DOM
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          // array of data [{}, {}, {}]
          photos: result,
        });
      });
  }

  render() {
    // we don't set state inside of render since state keeps getting updated over and over.
    const size = 15;
    const photoItems = this.state.photos.slice(0, size).map((photo) => {
      return (
        <li key={photo.id}>
          <label>{photo.title}</label>
          <img src={photo.thumbnailUrl} alt="" />
        </li>
      );
    });

    return <ul>{photoItems}</ul>;
  }
}

export default App;
