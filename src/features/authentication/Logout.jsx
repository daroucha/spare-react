import { Dropdown } from 'flowbite-react'
import { useLogout } from './useLogout'
import { IconLogout } from '@tabler/icons-react'

function Logout() {
  const { logout, isLoading } = useLogout()

  return (
    <Dropdown.Item
      className="text-red-500"
      onClick={logout}
      disabled={isLoading}
      icon={IconLogout}
    >
      Sair
    </Dropdown.Item>
  )
}

export default Logout
