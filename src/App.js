import React, {Component} from 'react';

class App extends Component {

  constructor() {
    super()
  }

  componentDidMount() {
    // fetch api request for data
    // wait until component has mounted on virtual DOM
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(result => console.log(result))
  }

  render() {
    // we don't set state inside of render since state keeps getting updated over and over.
    return <h1>Hello API!</h1>
  }
}

export default App;
