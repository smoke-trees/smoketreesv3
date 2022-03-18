import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router';
import './App.scss';
import { Index } from './pages';
import gsap from 'gsap'
import ScrolLTrigger from 'gsap/ScrollTrigger'
// import Scrollbar from 'smooth-scrollbar'
// import overscrollEffect from 'smooth-scrollbar/plugins/overscroll'
gsap.registerPlugin(ScrolLTrigger)

const routes = [{
  element: <Index />,
  path: '/',
  key: 'index'
}]



function App() {
  useEffect(() => {
    ScrolLTrigger.defaults({
      markers: false,
    })

    const cursor = document.getElementById('cursor')
    const moveFunction = function (mouseMoveEvent) {
      const top = mouseMoveEvent.clientY - cursor.offsetHeight / 2;
      const left = mouseMoveEvent.clientX - cursor.offsetWidth / 2;
      gsap.set(cursor, {
        top,
        left
      })
    }
    window.addEventListener('mousemove', moveFunction)
    window.addEventListener('scroll', moveFunction)
    return () => {
      window.removeEventListener('mousemove', moveFunction)
      window.removeEventListener('scroll', moveFunction)
    }
  }, [])
  return (
    <div className="App">
      <div className='cursor' id='cursor' />
      <Routes>
        {routes.map(route => <Route  {...route} />)}
      </Routes>
    </div>
  );
}

export default App;