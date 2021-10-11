import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from './styles/Theme';
import {Login} from './components/Login';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Medical from './components/Medical';

function App() {
  return (    
    <ThemeProvider theme={Theme}>
    <Router>
      <Switch>    
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Header}></Route>
        <Route exact path="/navbar" component={Navbar}></Route>
        <Route exact path="/medical-pa" component={Medical}></Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
