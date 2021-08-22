import React from 'react';
import './App.css';
import Home from './components/index'
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume'
import Cv from './components/Cv'
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <CssBaseline />
      <Route exact  path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/cv" component={Cv} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </div>
  );
}

export default App;
