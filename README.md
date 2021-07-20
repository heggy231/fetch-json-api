# fetch json api use state class based react

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

```js
// fetch template to follow
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

```js
// app.js  check if I could fetch the data

  componentDidMount() {
    // fetch api request for data
    // wait until component has mounted on virtual DOM
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(result => console.log(result))
  }
  
```