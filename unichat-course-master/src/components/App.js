import React from 'react';
import {Helmet} from "react-helmet";


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {AuthProvider} from '../contexts/AuthContext';

import Chats from './Chats';
import Login from './Login';

function App() {
  return (

    <div style={{fontFamily: 'Avenir'}}>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Unichat</title>
            </Helmet>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path='/chats' component={Chats} />
            <Route path='/' component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
