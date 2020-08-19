import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Administrador from './components/administrador/Administrador';

function App() {
  return (
    <Router>
      <Switch>
        {/* pagina principal */}
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
        {/* debera estar autenticado para ver el administrador */}
        <Route exact path='/administrador' component={Administrador} />
      </Switch>
    </Router>
  );
}

export default App;
