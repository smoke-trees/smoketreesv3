import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Index, About, Product, ProjectName, Clients, Services } from './pages';
import gsap from 'gsap'
import ScrolLTrigger from 'gsap/ScrollTrigger'
import { DarkModeProvider } from './context/darkModeContext';
import { Navbar } from './components';
// import Scrollbar from 'smooth-scrollbar'
// import overscrollEffect from 'smooth-scrollbar/plugins/overscroll'
gsap.registerPlugin(ScrolLTrigger)

const routes = [
  {
  element: <ProjectName />,
  path: '/project/:name',
  key: 'projectName'
  },
  {
  element: <Product />,
  path: '/project',
  key: 'project'
  },
  {
  element: <Clients />,
  path: '/clients',
  key: 'clients'
  },
  {
  element: <About />,
  path: '/about',
  key: 'about'
  },
  {
  element: <Services />,
  path: '/services',
  key: 'services'
  },
  {
  element: <Index />,
  path: '/',
  key: 'index'
  },
]



function App() {
  useEffect(() => {
    ScrolLTrigger.defaults({
      markers: true,
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
      <DarkModeProvider>
        <Navbar />
        <Routes>
          {routes.map(route => <Route exact {...route} />)}
        </Routes>
      </DarkModeProvider>
    </div>
  );
}

export default App;
