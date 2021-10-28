import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand='apple' price='500000'></MyComponent>
      <MyComponent brand='hp' price='30000'></MyComponent>
      <MyComponent brand='microsoft' price='80000'></MyComponent>
      <MyComponent brand='google' price='7000'></MyComponent>
    </div>
  );
}
function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h2>Name:{props.name}</h2>
      <p>Number:{props.phone}</p>
      <h5>Email: {props.email}</h5>
    </div>
  )
}

function MyComponent(props) {
  const [points, setPoints] = useState(1);
  const myStyle = {
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '10px',
    padding: '5px',
    borderRadius: '20px'
  }
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={myStyle}>
      <h1>Yo Yo somrat {props.brand}</h1>
      <p>Asking Money,price:{props.price}$, I have Price:{points}</p>
      <button className='product' onClick={handleAddPoints}>Add Credit</button>
      <p style={{ color: 'green', fontWeight: 'bold' }}>I can write my own components</p>
    </div >
  )
}

export default App;
