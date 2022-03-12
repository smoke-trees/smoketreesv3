import React from 'react'
import { Route, Routes } from 'react-router';
import './App.scss';
import { Index } from './pages';

const routes = [{
  element: <Index />,
  path: '/'
}]

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map(route => <Route {...route} />)}
      </Routes>
    </div>
  );
}

export default App;