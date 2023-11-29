import { Navbar, Footer } from 'flowbite-react'
import { Outlet } from 'react-router-dom'

import spareLogo from '../assets/images/spare.svg'

function UnAuthLayout() {
  return (
    <div className="w-full h-screen grid content-between bg-white dark:bg-gray-800">
      <Navbar>
        <Navbar.Brand>
          <img src={spareLogo} />
        </Navbar.Brand>
      </Navbar>

      <div className="w-full min-h-full">
        <div className="box-border w-full px-36">
          <Outlet />
        </div>
      </div>

      <Footer container>
        <Footer.Copyright by="Spare" year={2023} />

        <Footer.LinkGroup>
          <Footer.Link href="#">Home</Footer.Link>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  )
}

export default UnAuthLayout
