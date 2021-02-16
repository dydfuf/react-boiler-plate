import React, { Component } from 'react'
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import NavBar from './components/views/NavBar/NavBar'
import Footer from './components/views/Footer/Footer'
import Auth from './hoc/auth'
import { Suspense } from 'react';

export class App extends Component {
  render() {
    return (
      <Suspense fallback={(<div> Loading ... </div>)}>
        <NavBar />
        <div style={{ paddingTop: '69px', minHeight: 'clac(100vh - 80px)' }}>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
          </Switch>
        </div>
        <Footer />
      </Suspense>
    )
  }
}

export default App
