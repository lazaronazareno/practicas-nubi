import React from 'react';

import Header from './components/header/header';
import Calculadora from './components/calculadora/calculadora';
import Home from './components/home/home';
import Recargas from './components/recargas/recargas';
import Whithdrawals from './components/Withdrawals/index';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Calculadora />
      <Recargas />
      <Whithdrawals />
    </div>
  );
}

export default App;
