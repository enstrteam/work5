import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Menu/Menu.module.scss";

export default class Item extends Component {
  render() {
    return (
      <li>
        <NavLink to={this.props.item.url} className={({isActive})=>isActive ? styles.selected : undefined}>
          <div className="d-flex align-items-center">
            <div className={"me-3 "+styles.rect}></div>
            <div className="ps-3 ps-lg-1 me-3">
              {this.props.iconSelector(this.props.item.id)}
            </div>
            <span className="d-none d-lg-inline ps-1 me-3">{this.props.item.title}</span>
          </div>
        </NavLink>
      </li>
    );
  }
}
