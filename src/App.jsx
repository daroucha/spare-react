/* eslint-disable no-unused-vars */
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Flowbite } from 'flowbite-react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import UnAuthLayout from './ui/UnAuthLayout'
import AuthLayout from './ui/AuthLayout'
import ProtectedRoute from './ui/ProtectedRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Goals from './pages/Goals'
import NotFound from './pages/NotFound'

import './styles/tailwind.css'
import spareFlowbiteTheme from './utils/spareFlowbiteTheme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <Flowbite theme={{ theme: spareFlowbiteTheme }}>
        <BrowserRouter>
          <Routes>
            <Route element={<UnAuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route
              element={
                <ProtectedRoute>
                  <AuthLayout />
                </ProtectedRoute>
              }
            >
              <Route
                index
                element={
                  <Navigate replace to="dashboard" />
                }
              />
              <Route path="dashboard" element={<Home />} />
              <Route path="incomes" element={<Incomes />} />
              <Route
                path="expenses"
                element={<Expenses />}
              />
              <Route path="goals" element={<Goals />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Flowbite>
    </QueryClientProvider>
  )
}

export default App
