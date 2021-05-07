import React from 'react';
import './App.css';
import Login from "./Login";
import Nav from './Nav';
import Register from './Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
  <Router>
    <div className= "App">
      <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
    </div>
  </Router>




    // <div className="reglog">
    //   <button onClick={logreg}>Login</button>
    //   <button onClick={reglog}>Register</button>
    // </div> 
    





    
  );
}

const Home = () => (
    <div>
      <h1>HOME PAGE</h1>
    </div>
)

export default App;
