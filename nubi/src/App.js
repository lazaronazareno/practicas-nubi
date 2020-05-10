import React from 'react';

import Header from './Components/header/header';
import Calculadora from './Components/calculadora/calculadora';
import Home from './Components/home/home';
import Recargas from './Components/recargas/recargas';
import CheckIn from './Components/CheckIn';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Calculadora />
      <Recargas />
      <CheckIn />
    </div>
  );
}

export default App;
