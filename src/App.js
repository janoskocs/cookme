import { useState, useEffect } from 'react';
import './styles/main.css';

import Nav from './components/Nav'
import Feed from './components/Feed';
function App() {

  const [users, setUsers] = useState(null)


  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(res => {
        return res.json() //The returned response is turned into a javascript object.This will return another promise which is the data
      })
      .then((data) => {//This .then receives the actual data from the promise above.
        console.log(data)
        setUsers(data)
      })
  }, [])

  return (
    <div className="container">
      <Nav />
      <Feed />
    </div>
  );
}

export default App;
