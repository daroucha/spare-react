import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { login as loginApi } from '../../services/apiAuth'

export function useLogin() {
  const navigate = useNavigate()

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      sessionStorage.setItem('token', user.token)
      navigate('/dashboard', { replace: true })
      console.log('redirect to dashboard')
    },
  })

  return { login, isLoading }
}
