import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from 'react-router-dom'

import './styles/tailwind.css'

import AuthLayout from './ui/AuthLayout'
import Login from './pages/Login'
import Home from './pages/Home'
import Incomes from './pages/Incomes'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Navigate replace to="login" />}
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<AuthLayout />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="incomes" element={<Incomes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
