import { useState } from 'react'
import { Button, TextInput, Label } from 'flowbite-react'
import {
  IconFidgetSpinner,
  IconLock,
  IconMail,
} from '@tabler/icons-react'
import { useLogin } from './useLogin'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
      }
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-md flex-col gap-4"
    >
      <div>
        <div className="mb-2 block">
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
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
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
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        isProcessing={isLoading}
        processingSpinner={<IconFidgetSpinner />}
      >
        Entrar
      </Button>
    </form>
  )
}

export default LoginForm
