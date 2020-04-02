import React, { Component } from 'react'
import About from "../About/About";
import Overview from "../Overview/Overview";
import {Switch,Route  } from "react-router-dom";
export class DashBoard extends Component {
    render() {
        return (
            <div>
                <h2>Dashboard</h2>
              <Switch>
                   <Route path="/dashboard/about" component={About}/>
                   <Route path="/dashboard/overview" component={Overview}/>
               </Switch>   
            </div>
        )
    }
}

export default DashBoard
