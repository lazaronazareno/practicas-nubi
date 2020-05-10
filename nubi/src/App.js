import React from 'react';

import Header from './Components/header/header';
import Calculadora from './Components/calculadora/calculadora';
import Home from './Components/home/home';
import Recargas from './Components/recargas/recargas';
import Blog from './Components/Blog/index';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Calculadora />
      <Recargas />
      <Blog />
    </div>
  );
}

export default App;
