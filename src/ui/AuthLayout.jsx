/* eslint-disable react/prop-types */
import {
  Navbar,
  Flowbite,
  DarkThemeToggle,
  Dropdown,
  Avatar,
} from 'flowbite-react'
import {
  Outlet,
  useLinkClickHandler,
  useLocation,
} from 'react-router-dom'

import spareLogo from '../../public/spare.svg'

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
            <div className="flex items-center space-x-4">
              <h6 className="text-gray-900 dark:text-white">
                John Doe
              </h6>

              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            </div>
          }
        >
          <Dropdown.Header>
            <DarkThemeToggle />
          </Dropdown.Header>

          <Dropdown.Item>Conta</Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item>Sair</Dropdown.Item>
        </Dropdown>

        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}

function AuthLayout() {
  return (
    <Flowbite>
      <div className="Panel w-screen h-screen">
        <AppNavBar />

        <div className="Content w-full">
          <Outlet />
        </div>
      </div>
    </Flowbite>
  )
}

export default AuthLayout