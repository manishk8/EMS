import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import Setting from './components/setting/Setting';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Dashboard exact path="/" component={Home} />
          <Dashboard exact path="/home" component={Home} />
          <Dashboard exact path="/setting" component={Setting} />
          <Dashboard exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
