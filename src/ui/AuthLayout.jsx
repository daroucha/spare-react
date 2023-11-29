/* eslint-disable react/prop-types */
import { Navbar, Dropdown, Avatar } from 'flowbite-react'
import {
  Outlet,
  useLinkClickHandler,
  useLocation,
} from 'react-router-dom'
import { useUser } from '../features/authentication/useUser'

import spareLogo from '../assets/images/spare.svg'
import Logout from '../features/authentication/Logout'
import { TextTitleSm } from './TextTitle'
import {
  IconChevronDown,
  IconUserCircle,
} from '@tabler/icons-react'

function AppNavLink({ to, text }) {
  const location = useLocation()
  const clickHandler = useLinkClickHandler(to)

  return (
    <span onClick={clickHandler}>
      <Navbar.Link
        href={to}
        active={location.pathname === to}
      >
        {text}
      </Navbar.Link>
    </span>
  )
}

function AppNavBar() {
  const { user } = useUser()

  const navLinks = [
    {
      name: 'home',
      text: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'incomes',
      text: 'Entradas',
      path: '/incomes',
    },
    {
      name: 'expenses',
      text: 'Despesas',
      path: '/expenses',
    },
    {
      name: 'goals',
      text: 'Metas',
      path: '/goals',
    },
  ]

  return (
    <Navbar>
      <Navbar.Brand>
        <img src={spareLogo} />
      </Navbar.Brand>

      <Navbar.Collapse>
        {navLinks.map((link) => (
          <AppNavLink
            key={link.name}
            to={link.path}
            text={link.text}
          />
        ))}
      </Navbar.Collapse>

      <div className="flex md:order-2 space-x-4">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="flex items-center space-x-4 rounded-full hover:shadow-stroke-md transition duration-100 ease-linear">
              <div className="flex items-center space-x-1 pl-2">
                <IconChevronDown size={16} />
                <TextTitleSm bold>{user.name}</TextTitleSm>
              </div>

              <Avatar
                alt="User settings"
                rounded
                size="md"
              />
            </div>
          }
        >
          <Dropdown.Item icon={IconUserCircle}>
            Conta
          </Dropdown.Item>

          <Dropdown.Divider />

          <Logout />
        </Dropdown>

        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}

function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-white dark:bg-gray-800">
      <AppNavBar />

      <div className="Content w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
