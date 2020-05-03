import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const footballers = ["Messi", "Ronaldo", "Cristiano", "Kaka", "Lampard"]
  const Products = [
    {name : "Photoshop", price: "99 Dollars"},
    {name : "Acrobat", price: "199 Dollars"},
    {name : "PDF reader", price : "999 Dollars"},
    {name : "Premier Pro", price: "9299 Dollars"}
  ]


// const footballersName = footballers.map(footballer => footballer)
// console.log(footballersName)
// do this to understand what is going on inside first 2 ul(s)

  return (
    <div className="App">
      <header className="App-header">
        
        <Counter></Counter>

        <Users></Users>
        <ul>
          {
            footballers.map(footballer => <li>{footballer}</li>)
          }
        <br/>
        <br/>
          {
            Products.map(product => <li>{product.name}</li>)
          }
        <br/>
        <br/>
          {
            Products.map(pd => <Product product={pd}></Product>)
          }
        </ul>



        {/*
        // ### the below lines are meant to understand how it works statically and the upper lines are used to do everything dynamically ###
        
        <Product product={Products[0]}></Product> 
        <Product product={Products[1]}></Product>
        <Product product={Products[2]}></Product>
        <Product name={Products[0].name} price={Products[0].price}></Product>
        this upper line sends it as a property instead of element by element
        <Person name={footballers[0]} role="Seamer"></Person>
        <Person name="Miraz" role="Spinner"></Person> */}
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    // .then(data=> console.log(data))
    .then(data=> setUsers(data))
    // console.log("caliin g")
  }, []
)
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        <ul>
          {
            users.map(user => <li>{user.name}</li> )
          }
          <br/>
          <br/>
          {
            users.map(user => <li>{user.email}</li> )
          }
        </ul>
      }
    </div>
  )
}

function Product(props){
  const {name, price} = props.product
  // console.log(name, price)

  const ProductStyle={
    border: "1px solid grey",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    height: "250px", 
    width: "200px",
    color: "red" 
  }

  return(
    <div style={ProductStyle}>
      <h4>
        {name}
      </h4>
      <h4>
        {price}
      </h4>
      <button>Buy Now </button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0)

  const handleIncreaseCount = () => {
    const newCount = count + 1
    setCount(newCount)
  }
  const handleDecreaseCount = () => {
    const newCount = count - 1
    setCount(newCount)
  }

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={handleIncreaseCount}>Increase Count</button>
      <button onMouseOut={handleDecreaseCount}>Decrease Count</button>
    </div>
  )
}


// ### the below functions are meant to understand how html and css gets into the app ###

// function Person(props){
//   // after declaring a function, I can return a full css 
//   const PersonStyle={
//     border: "2px solid yellow",
//     margin: "10px",
//     padding: "20px"
//   }
//   console.log(props)
//   // after declaring a function, I can return a full html 
//   return (
//   <div style={PersonStyle}>  
//     <h1>Name: {props.name}</h1>
    
//   <h3> {props.role}</h3>
//   </div>
//   )
// }

// function Person2(props){
//   const PersonStyle2={
//     border: "2px solid orange",
//     margin: "10px",
//     padding: "30px"
//   }
//     return (
//     <div style={PersonStyle2}>
//       <h3>
//         My Name: {props.name}
//       </h3>
//       <p>
//         My profession: {props.role}
//       </p>
//     </div>
//   )
// }

export default App;
