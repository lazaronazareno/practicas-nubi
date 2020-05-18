import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/header/header';
import Calculadora from './Components/calculadora/calculadora';
import Home from './Components/home/home';
import Recargas from './Components/recargas/recargas';
import Whithdrawals from './Components/Withdrawals/index';
import Benefits from './Components/Benefits/index';
import Blog from './Components/Blog/index';
import CheckIn from './Components/CheckIn';
import Footer from './Components/Footer';
import Nosotros from './Components/Nosotros/index';
import Privacidad from './Components/Privacidad/index';
import Press from './Components/externalPages/enterprise/enterprise';
import Enterprise from './Components/externalPages/press/press';
import Terms from './Components/externalPages/terms/terms';

function App() {
  return (
    <div>
      <Router forceRefresh>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            <Calculadora />
            <Recargas />
            <Whithdrawals />
            <Benefits />
            <Blog />
            <CheckIn />
          </Route>
          <Route exact path="/Recargas" component={Recargas} />
          <Route exact path="/Retiros" component={Whithdrawals} />
          <Route exact path="/Calculadora" component={Calculadora} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Nosotros" component={Nosotros} />
          <Route exact path="/Prensa" component={Press} />
          <Route exact path="/Empresa" component={Enterprise} />
          <Route exact path="/Privacidad" component={Privacidad} />
          <Route exact path="/Terminos" component={Terms} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
