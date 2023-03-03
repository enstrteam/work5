import React, { Component } from "react";
import Crumbs from "../Crumbs";
import StoreManagement from "../StoreManagement";
import style from "./Main.module.scss";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  render() {
    return (
      <div className="d-flex">
        <div className={style.sidebar}></div>
        <div className={style.maincontent}>
          <Crumbs
            menu={this.props.menu}
            selectedMenuId={this.props.selectedMenuId}
          />
          <StoreManagement showModal={this.props.showModal} />
        </div>
      </div>
    );
  }
}
