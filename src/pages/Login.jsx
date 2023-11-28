/* eslint-disable react/no-unescaped-entities */
import { Carousel } from 'flowbite-react'
import LoginForm from '../features/authentication/LoginForm'
import { TextDisplayXs } from '../ui/TextDisplay'
import { TextBodySm } from '../ui/TextBody'
import TextLink from '../ui/TextLink'

function Billboard() {
  return (
    <div id="Billboard" className="w-max h-full">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>

          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
        </Carousel>
      </div>
    </div>
  )
}

function Login() {
  return (
    <div
      id="LoginPage"
      className="flex flex-row justify-between gap-x-36"
    >
      <Billboard />

      <div
        id="LoginBox"
        className="w-2/6 flex flex-col gap-y-10"
      >
        <TextDisplayXs>👋 Hello again</TextDisplayXs>

        <LoginForm />

        <TextBodySm>
          Don't have an account yet?{' '}
          <TextLink to="/sign-up">Sign-up</TextLink>
        </TextBodySm>
      </div>
    </div>
  )
}

export default Login
