import React, { Component } from "react";
import styles from "./Menu/Menu.module.scss";

export default class Item extends Component {
  render() {
    return (
      <li
        className={`nav-item ${
          this.props.item.id === this.props.selectedMenuId
            ? styles.selected
            : ""
        }`}
      >
        <a className="nav-link p-0 text-decoration-none"
          onClick={(event) => {
            this.props.selectMenu(this.props.item.id);
          }}
        >
          <div className="d-flex align-items-center">
            <div className={"me-3 "+styles.rect}></div>
            <div className="ps-3 ps-lg-1 me-3">
              {this.props.iconSelector(this.props.item.id)}
            </div>
            <span className="d-none d-lg-inline ps-1 me-3">{this.props.item.title}</span>
          </div>
        </a>
      </li>
    );
  }
}
