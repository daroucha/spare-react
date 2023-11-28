import LoginForm from '../features/authentication/LoginForm'

function Login() {
  return (
    <div className="w-full h-screen bg-white dark:bg-black flex flex-col items-center justify-center gap-y-8">
      <h1 className="text-2xl font-bold">Login</h1>

      <LoginForm />
    </div>
  )
}

export default Login
