import React from 'react';

import Calculadora from './components/calculadora/calculadora';
import Home from './components/home/home';
import Recargas from './components/recargas/recargas';

function App() {
  return (
    <div>
      <Home />
      <Calculadora />
      <Recargas />
    </div>
  );
}

export default App;
