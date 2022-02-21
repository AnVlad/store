import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
