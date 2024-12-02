import { useState } from 'react'
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import Layout from './Views/Layout';
import Taskmanager from './pages/Taskmanager';
import HomePage from './pages/HomePage';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/tasks" element={<Taskmanager />}/>
        </Route>
      </Routes>

    </>
  )
}

export default App
