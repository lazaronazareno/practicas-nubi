import React from 'react';

import Header from './Components/header/header';
import Calculadora from './Components/calculadora/calculadora';
import Home from './Components/home/home';
import Recargas from './Components/recargas/recargas';
import Whithdrawals from './Components/Withdrawals/index';
import Benefits from './Components/Benefits/index';
import Blog from './Components/Blog/index';
import CheckIn from './Components/CheckIn';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Calculadora />
      <Recargas />
      <Whithdrawals />
      <Benefits />
      <Blog />
      <CheckIn />
      <Footer />
    </div>
  );
}

export default App;
