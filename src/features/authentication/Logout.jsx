import { Dropdown } from 'flowbite-react'
import { useLogout } from './useLogout'

function Logout() {
  const { logout, isLoading } = useLogout()

  return (
    <Dropdown.Item onClick={logout} disabled={isLoading}>
      Sair
    </Dropdown.Item>
  )
}

export default Logout
