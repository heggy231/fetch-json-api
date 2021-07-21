# fetch json api use state class based react

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

- data format of photo api data: 
(https://jsonplaceholder.typicode.com/photos)
```js
[ 
  {
    albumId: 1
    id: 1
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
    title: "accusamus beatae ad facilis cum similique qui sunt"
    url: "https://via.placeholder.com/600/92c952"
  }
]

```

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

- slice img to only show 50 images.

```js
var list = [1, 2, 3, 4, 5]
list.slice(0, 3)
// => [1, 2, 3]

var size = 50; // first 50 img
var photoItems = this.state.photos.slice(0, size).map(...)
```

## part 2 fetching photo only component

* Create PhotoList Component to display Photos
  - You pass the data from parent App to child PhotoList.
  - reusability concern we divide work.
  Only job for PhotoList is to display photos.
  The pare App is responsible for fetching data.