import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Secciones from './components/secciones/Secciones';

function App() {
  return (
    <Router>
      <Switch>
        {/* pagina principal */}
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
        <Route exact path='/secciones' component={Secciones} />
      </Switch>
    </Router>
  );
}

export default App;
