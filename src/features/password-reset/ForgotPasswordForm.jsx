import { useState } from 'react'
import {
  IconFidgetSpinner,
  IconMail,
} from '@tabler/icons-react'
import { Button, TextInput, Label } from 'flowbite-react'
import FormAlert from '../../ui/FormAlert'
import { useConfirmationEmail } from './useConfirmationEmail'

function ForgotPasswordForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)

  const { confirmationEmail, isLoading } =
    useConfirmationEmail()

  function handleSubmit(e) {
    e.preventDefault()

    if (!email) {
      return
    }

    confirmationEmail(
      { email },
      {
        onError: (err) => {
          const { error: apiError } = err.response.data
          setMessage(apiError)
        },
      }
    )
  }

  return (
    <form
      id="ForgotPasswordForm"
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4 mt-8"
    >
      <FormAlert
        message={message}
        dismiss={() => setMessage(null)}
      />

      <div className="flex flex-col gap-y-4">
        <fieldset className="flex flex-col gap-2">
          <div className="block">
            <Label htmlFor="email" value="E-mail" />
          </div>

          <TextInput
            type="email"
            id="email"
            autoComplete="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={IconMail}
            disabled={isLoading}
            sizing="sm"
            required
          />
        </fieldset>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        isProcessing={isLoading}
        processingSpinner={<IconFidgetSpinner />}
      >
        Enviar e-mail de confirmação
      </Button>
    </form>
  )
}

export default ForgotPasswordForm
