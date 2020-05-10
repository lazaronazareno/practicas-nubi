import React from 'react';

import Header from './components/header/header';
import Calculadora from './components/calculadora/calculadora';
import Home from './components/home/home';
import Recargas from './components/recargas/recargas';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Calculadora />
      <Recargas />
    </div>
  );
}

export default App;
