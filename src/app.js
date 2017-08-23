import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AsyncImport from 'router'
import 'css/home'
const App = () => (
  <Router >
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page1</Link></li>
        <li><Link to="/page2">Page2</Link></li>
      </ul>

      <Route exact path="/" component={AsyncImport('pages/Home')} />
      <Route path="/page1" component={AsyncImport('pages/Page1')} />
      <Route path="/page2" component={AsyncImport('pages/Page2')} />
    </div>
  </Router>
)
export default App;