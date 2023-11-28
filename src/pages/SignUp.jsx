/* eslint-disable react/no-unescaped-entities */
import { Carousel } from 'flowbite-react'
import { TextDisplayXs } from '../ui/TextDisplay'
import { TextBodySm } from '../ui/TextBody'
import TextLink from '../ui/TextLink'
import SignUpForm from '../features/sign-up/SignUpForm'

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

function SignUp() {
  return (
    <div
      id="SignUpPage"
      className="flex flex-row justify-between gap-x-36"
    >
      <div
        id="SignUpBox"
        className="w-2/6 flex flex-col gap-y-10"
      >
        <TextDisplayXs>Sign up to Spare</TextDisplayXs>

        <SignUpForm />

        <TextBodySm>
          Already have an account?{' '}
          <TextLink to="/login">Sign-in</TextLink>
        </TextBodySm>
      </div>

      <Billboard />
    </div>
  )
}

export default SignUp
