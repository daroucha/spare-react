/* eslint-disable react/no-unescaped-entities */
import ForgotPasswordForm from '../features/password-reset/ForgotPasswordForm'
import { TextBodySm } from '../ui/TextBody'
import { TextDisplayXs } from '../ui/TextDisplay'
import TextLink from '../ui/TextLink'

function ForgotPassword() {
  return (
    <div
      id="ForgotPasswordPage"
      className="flex flex-col justify-center gap-y-4"
    >
      <TextDisplayXs>
        🤔 Forgot your password?
      </TextDisplayXs>

      <TextBodySm>
        Don't worry, you can set a new password by typing
        your e-mail address on the field below
      </TextBodySm>

      <ForgotPasswordForm />

      <TextBodySm>
        Oh you remembered it?{' '}
        <TextLink to="/">Sign-in</TextLink>
      </TextBodySm>
    </div>
  )
}

export default ForgotPassword
