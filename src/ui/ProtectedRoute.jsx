/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { Spinner } from 'flowbite-react'
import { useUser } from '../features/authentication/useUser'
import { useEffect } from 'react'

function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  // Load authenticated user
  const { isLoading, isAuthenticated } = useUser()

  // If there is no authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate('/login')
      }
    },
    [isAuthenticated, isLoading, navigate]
  )

  // Loading spinner
  if (isLoading) {
    return <Spinner />
  }

  // If there is, render app
  if (isAuthenticated) {
    return children
  }
}

export default ProtectedRoute
