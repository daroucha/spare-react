import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { signUp as signUpApi } from '../../services/apiAuth'

export function useSignUp() {
  const navigate = useNavigate()

  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) =>
      signUpApi({ name, email, password }),
    onSuccess: (user) => {
      sessionStorage.setItem('token', user.token)
      navigate('/dashboard', { replace: true })
    },
  })

  return { signUp, isLoading }
}
