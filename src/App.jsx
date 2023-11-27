import React from 'react'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom'

import Auth from './components/layout/Auth'

import Home from './pages/Home'
import NotFound from './pages/NotFound'

function Layout() {
  return (
    <Auth>
      <Outlet />
    </Auth>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
