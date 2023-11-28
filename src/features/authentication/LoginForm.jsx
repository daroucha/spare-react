import { useState } from 'react'
import { Button, TextInput, Label } from 'flowbite-react'
import {
  IconBrandGoogle,
  IconFidgetSpinner,
  IconLock,
  IconMail,
} from '@tabler/icons-react'
import FormAlert from '../../ui/FormAlert'
import { useLogin } from './useLogin'
import TextLink from '../../ui/TextLink'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const { login, isLoading } = useLogin()

  function handleSubmit(e) {
    e.preventDefault()

    if (!email || !password) {
      return
    }

    login(
      { email, password },
      {
        onSettled: () => {
          setPassword('')
        },
        onError: (err) => {
          const { error: apiError } = err.response.data
          setError(apiError)
        },
      }
    )
  }

  return (
    <form
      id="LoginForm"
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-8"
    >
      <FormAlert
        type="failure"
        message={error}
        dismiss={() => setError(null)}
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

        <fieldset className="flex flex-col justify-end gap-2">
          <div className="block">
            <Label htmlFor="password" value="Senha" />
          </div>

          <TextInput
            type="password"
            id="password"
            autoComplete="current-password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={IconLock}
            disabled={isLoading}
            sizing="sm"
            required
          />

          <TextLink
            className="text-end"
            to="/forgot-password"
          >
            Esqueceu a senha?
          </TextLink>
        </fieldset>
      </div>

      <div className="flex flex-col gap-y-4">
        <Button
          type="submit"
          disabled={isLoading}
          isProcessing={isLoading}
          processingSpinner={<IconFidgetSpinner />}
        >
          Entrar
        </Button>

        <Button color="gray">
          <IconBrandGoogle size={16} className="mr-2" />
          Entrar com Google
        </Button>
      </div>
    </form>
  )
}

export default LoginForm
