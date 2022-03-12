import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router';
import './App.scss';
import { Index } from './pages';
import gsap from 'gsap'

const routes = [{
  element: <Index />,
  path: '/'
}]

function App() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const moveFunction = function (mouseMoveEvent) {
      const top = mouseMoveEvent.clientY - cursor.offsetHeight / 2;
      const left = mouseMoveEvent.clientX - cursor.offsetWidth / 2;
      gsap.set(cursor, {
        top,
        left
      })
      console.log({ top, left })
    }
    document.addEventListener('mousemove', moveFunction)
    return () => {
      document.removeEventListener('mousemove', moveFunction)
    }
  }, [])
  return (
    <div className="App">
      <div className='cursor' id='cursor' />
      <Routes>
        {routes.map(route => <Route {...route} />)}
      </Routes>
    </div>
  );
}

export default App;