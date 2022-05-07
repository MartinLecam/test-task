import React from 'react';
import AppState from './context/background/AppState';
import Main from './components/main';

const App = () => {
  return (
    <AppState>
      <Main/>
    </AppState>
  );
};

export default App;
