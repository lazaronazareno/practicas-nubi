import React from 'react';

import Header from './Components/header/header';
import Calculadora from './Components/calculadora/calculadora';
import Home from './Components/home/home';
import Recargas from './Components/recargas/recargas';
import Whithdrawals from './Components/Withdrawals/index';
import Benefits from './Components/Benefits/index';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Calculadora />
      <Recargas />
      <Whithdrawals />
      <Benefits />
    </div>
  );
}

export default App;
