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
      <Route exact  path="/MyPortfolio/" component={Home} />
      <Route path="/MyPortfolio/resume" component={Resume} />
      <Route path="/MyPortfolio/cv" component={Cv} />
      <Route path="/MyPortfolio/portfolio" component={Portfolio} />
      <Route path="/MyPortfolio/contacts" component={Contacts} />
    </div>
  );
}

export default App;
