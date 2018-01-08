import React from 'react'
import { Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'

const Layout = () => (
    <Router>
  <div>
    <Route exact path="/" component={Home}/>
  </div>
</Router>
)

export default Layout