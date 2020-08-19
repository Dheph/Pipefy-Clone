import React from 'react';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


import GlobalStyle from './styles/globalStyle'

import Header from './Components/Header'
import Board from './Components/Board'


function App() {
  return (

    <DndProvider backend={HTML5Backend}>

      <Header />
      <Board />
      <GlobalStyle />

    </DndProvider>

  );
}

export default App;
