import React from 'react'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home/LandingPage'
import Login from './pages/Dashboard/Login'

const Layout = () => (
    <Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
  </div>
</Router>
)

export default Layout