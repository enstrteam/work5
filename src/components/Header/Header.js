import React, { Component } from 'react'
import Crumbs from '../Crumbs'
import styles from './Header.module.scss'
import profile_avatar from '../../img/avatar.png'

export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <div className={"container-fluid mb-3 mb-sm-0 "+styles.header}>
        <div className="d-flex flex-row pt-4">
          <div className="me-auto">
            <Crumbs />
            <div className={"me-3 d-sm-none "+styles.menu_button} data-bs-toggle="offcanvas" data-bs-target="#menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
          </div>    
          <div className="d-flex justify-content-start">
            <div className={"me-3 "+styles.header__svg}>
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3295 0H3.10018C2.05806 0 1.21326 0.844805 1.21326 1.88692V16.1127C1.21326 17.1548 2.05806 17.9996 3.10018 17.9996H21.3295C22.3716 17.9996 23.2164 17.1548 23.2164 16.1127V1.88692C23.2164 0.844805 22.3716 0 21.3295 0Z" fill="#7B7B7B"/>
                <path d="M1 4.52862L10.7792 11.6989C11.5176 12.2404 12.7317 12.2404 13.4701 11.6989L23.4298 4.39735" stroke="white" strokeWidth="0.75477" strokeMiterlimit="22.9256"/>
              </svg>
              <div className={styles.header__svg_ellipse}></div>
            </div>
            <div className={"px-2 px-lg-3 "+styles.header__profile}>
                <div className={"mx-1 mx-lg-0 "+styles.avatar}>
                  <img src={profile_avatar} alt="" />
                </div>
                <div className={"d-none d-md-inline ps-3 pe-4 "+styles.header__profile_name}>
                  Максим Добжанский
                </div>
            </div>
          </div>
        </div>   
      </div>
    )
  }
}
