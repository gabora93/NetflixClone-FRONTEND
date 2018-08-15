import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../Navbar/Navbar';
import Login from '../Login/Login';
import Singup from '../Signup/Signup';

class Routes extends Component{



    render(){
        return(
            <Router>
                <main>
                <NavBar/>
                    <Route exact path="/" component={Home} />
                    <Route  path="/login" component={Login} />
                    <Route  path="/signup" component={Singup} />
                </main>
            </Router>
        )
    }
}


export default Routes;