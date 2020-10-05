import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Secciones from './components/secciones/Secciones';
import SeccionState from './context/secciones/seccionState';
import ImagenState from './context/imagenes/imagenState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import authToken from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada';

const token = localStorage.getItem('token');
if (token){
    authToken(token);
}

function App() {
    return (
        <SeccionState>
            <ImagenState>
                <AlertaState>
                    <AuthState>
                        <Router>
                            <Switch>
                            {/* pagina principal */}
                            <Route exact path='/' component={Home} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
                            <RutaPrivada exact path='/secciones' component={Secciones} />
                            </Switch>
                        </Router>
                    </AuthState>
                </AlertaState>
            </ImagenState>
        </SeccionState>
);
}

export default App;
