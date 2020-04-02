import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashBoard from "./Components/DashBoard/DashBoard";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import RegisterScreen from "./Components/RegisterScreen/RegisterScreen";
import { BrowserRouter,Route,Switch, Redirect } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <h1>Landing Screen</h1>

     <BrowserRouter>
     <Switch>
       <Route path="/dashboard" component={DashBoard}/>
       <Route path="/login" component={LoginScreen}/>
       <Route path="/Register" component={RegisterScreen}/>
       <Redirect path="*" to="/login"/>
       </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
