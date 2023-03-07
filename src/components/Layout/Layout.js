import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'

const Layout = (props) => {
  return (
          <div className="container-fluid">
            <div className="row d-flex flex-nowrap">
              <div
                className="col-auto px-0 bg-white offcanvas-sm offcanvas-start"
                data-bs-backdrop="true"
                id="menu"
              >
                <Menu
                  menu={props.menu}
                />
              </div>
              <div className="col ps-md-2 ps-xxl-5">
                <header>
                  <Header
                    menu={props.menu}
                  />
                </header>
                <main>
                  <Outlet />
                </main>
                <footer></footer>
              </div>
            </div>
          </div>
  )
}

export default Layout