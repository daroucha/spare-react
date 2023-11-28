import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { sendConfirmationEmail } from '../../services/apiAuth'

export function useConfirmationEmail() {
  const navigate = useNavigate()

  const { mutate: confirmationEmail, isLoading } =
    useMutation({
      mutationFn: ({ email }) =>
        sendConfirmationEmail({ email }),
      onSuccess: () => {
        navigate('/')
      },
    })

  return { confirmationEmail, isLoading }
}
