import { useState, useEffect } from 'react';
import './styles/main.css';

import Login from './components/Login/Login'
import Nav from './components/Nav'
import Feed from './components/Feed';
function App() {

  const [usersDB, setUsersDB] = useState([
    {
      "firstName": "Janos",
      "lastName": "Kocs",
      "password": "",
      "id": 1,
      "followers": [
        "Angelika", "John"
      ],
      "posts": [
        {
          "postId": 1,
          "date": "22/06/2022",
          "imgSrc": "https://source.unsplash.com/random/500x500",
          "likes": [
            "Angelika"
          ],
          "comments": [
            {
              "firstName": "Angelika",
              "id": 2,
              "comment": "This is awesome!"
            }
          ]
        },
        {
          "postId": 2,
          "date": "20/06/2022",
          "imgSrc": "https://source.unsplash.com/random/500x500",
          "likes": [
            "Angelika"
          ],
          "comments": [
            {
              "firstName": "Angelika",
              "id": 2,
              "comment": "This is great!"
            }
          ]
        }
      ]
    },
    {
      "firstName": "Angelika",
      "lastName": "Hegedus",
      "password": "",
      "id": 2,
      "followers": [
        "Janos"
      ],
      "posts": [
        {
          "postId": 1,
          "date": "20/06/2022",
          "imgSrc": "https://source.unsplash.com/random/500x500",
          "likes": [
            "Janos"
          ],
          "comments": [
            {
              "firstName": "Janos",
              "id": 2,
              "comment": "This is very cool!"
            }
          ]
        }
      ]
    },
    {
      "firstName": "John",
      "lastName": "Smith",
      "password": "",
      "id": 3,
      "followers": [
        "Janos",
        "Angelika"
      ],
      "posts": [
        {
          "postId": 1,
          "date": "20/06/2022",
          "imgSrc": "https://source.unsplash.com/random/500x500",
          "likes": [
            "Janos"
          ],
          "comments": [
            {
              "firstName": "Janos",
              "id": 2,
              "comment": "Thanks for posting this!"
            }
          ]
        }
      ]
    },
    {
      "firstName": "Diana",
      "lastName": "P",
      "password": "",
      "id": 4,
      "followers": [
        "Janos",
        "Angelika",
        "John"
      ],
      "posts": []
    }
  ])

  // useEffect(() => {
  //   fetch('http://localhost:8000/users')
  //     .then(res => {
  //       return res.json() //The returned response is turned into a javascript object.This will return another promise which is the data
  //     })
  //     .then((data) => {//This .then receives the actual data from the promise above.

  //       setUsers(data)
  //     })
  // }, [])


  return (
    <div className="container">
      <Login />
    </div>
  );
}

export default App;
