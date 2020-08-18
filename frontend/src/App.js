import React from 'react';

import GlobalStyle from './styles/globalStyle'

import Header from './Components/Header'
import Board from './Components/Board'


function App() {
  return (
   <>
    <Header />
    <Board />
    <GlobalStyle />
   </>
  );
}

export default App;
