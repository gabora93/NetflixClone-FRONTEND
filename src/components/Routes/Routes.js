import React, { Component } from 'react';
import { BrowserRouter as Router,
         Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import NavBar from '../Navbar/Navbar';
import Login from '../Login/Login';
import Singup from '../Signup/Signup';
import Logout from '../Logout/Logout';
import checkToken from '../../resolvers/checkToken';

class Routes extends Component{




    render(){


        const PrivateRoute = ({component: Component, ...rest}) => (
            <Route {...rest} render={(props) => (
                checkToken() === true ? <Component {...props}/> : <Redirect to='/login'/> )}
                />
        )



        return(
            <Router>
                <main>
                <NavBar/>
                    <Route exact path="/" component={Home} />
                    <Route exact  path="/login" component={Login} />
                    <Route exact  path="/signup" component={Singup} />
                    <PrivateRoute exact path='/logout' component={Logout} />
                </main>
            </Router>
        )
    }
}


export default Routes;