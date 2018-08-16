import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../Navbar/Navbar';
import Login from '../Login/Login';
import Singup from '../Signup/Signup';
import Logout from '../Logout/Logout';

class Routes extends Component{



    render(){
        return(
            <Router>
                <main>
                <NavBar/>
                    <Route exact path="/" component={Home} />
                    <Route exact  path="/login" component={Login} />
                    <Route exact  path="/signup" component={Singup} />
                    <Route exact  path="/logout" component={Logout} />
                </main>
            </Router>
        )
    }
}


export default Routes;