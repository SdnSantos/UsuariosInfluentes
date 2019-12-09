import React from 'react';

import Routes from './routes/routes';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
