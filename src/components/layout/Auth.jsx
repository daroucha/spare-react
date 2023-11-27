import {
  Navbar,
  Flowbite,
  DarkThemeToggle,
  Dropdown,
  Avatar,
} from 'flowbite-react'
import {
  useLinkClickHandler,
  useLocation,
} from 'react-router-dom'

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
      text: 'Home',
      path: '/',
    },
  ]

  return (
    <Navbar>
      <Navbar.Brand></Navbar.Brand>

      <Navbar.Collapse>
        <AppNavLink to="/" text="Home" />
        <AppNavLink to="/sdfs" text="404" />
      </Navbar.Collapse>

      <div className="flex md:order-2 space-x-4">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="flex items-center space-x-4">
              <h5 className="text-gray-900 dark:text-white">
                John Doe
              </h5>

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

function Auth({ children }) {
  return (
    <Flowbite>
      <div className="Panel w-screen h-screen">
        <AppNavBar />

        <div className="Content w-full">{children}</div>
      </div>
    </Flowbite>
  )
}

export default Auth
