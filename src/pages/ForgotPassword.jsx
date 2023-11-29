/* eslint-disable react/no-unescaped-entities */
import ForgotPasswordForm from '../features/password-reset/ForgotPasswordForm'
import { TextBodySm, TextBodyMd } from '../ui/TextBody'
import { TextDisplayXs } from '../ui/TextDisplay'
import TextLink from '../ui/TextLink'

function ForgotPassword() {
  return (
    <div
      id="ForgotPasswordPage"
      className="flex justify-center"
    >
      <div className="w-2/6 gap-y-4 flex flex-col">
        <TextDisplayXs>
          🤔 Forgot your password?
        </TextDisplayXs>

        <TextBodyMd>
          Don't worry, you can set a new password by typing
          your e-mail address on the field below
        </TextBodyMd>

        <ForgotPasswordForm />

        <TextBodySm>
          Oh you remembered it?{' '}
          <TextLink to="/">Sign-in</TextLink>
        </TextBodySm>
      </div>
    </div>
  )
}

export default ForgotPassword
