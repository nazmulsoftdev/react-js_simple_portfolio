import React, { Component } from 'react'
import Menu from './Menu/Menu';
import Profile from './profile/Profile';
import {Switch, Route,Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';


 class Maincomponent extends Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <Profile/>
                    </div>
                    <div className="col-7">
                        <div className="mt-5">
                            <Menu/>
                        </div>
                        <Switch>
                            <Route path="/home" exact render={() => <Home />} />
                            <Route path="/project" exact render={() => <Project />} />
                            <Route path="/contact" exact render={() => <Contact />} />
                            <Redirect from="/" to="/home" />
                        </Switch>
                   </div>
                </div>
            </div>
        )
    }
}




export default Maincomponent;