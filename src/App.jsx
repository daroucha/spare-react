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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import AuthLayout from './ui/AuthLayout'
import Login from './pages/Login'
import Home from './pages/Home'
import Incomes from './pages/Incomes'
import NotFound from './pages/NotFound'

import './styles/tailwind.css'

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
    </QueryClientProvider>
  )
}

export default App
