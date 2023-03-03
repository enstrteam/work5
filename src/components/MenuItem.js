import React, { Component } from "react";
import styles from "./Menu/Menu.module.scss";

export default class Item extends Component {
  render() {
    return (
      <li
        className={
          this.props.item.id === this.props.selectedMenuId
            ? styles.selected
            : ""
        }
      >
        <a
          onClick={(event) => {
            this.props.selectMenu(this.props.item.id)
          }}
        >
          <div className="d-flex align-items-center">
            <div className={styles.rect}></div>
            {this.props.selectorSvg(this.props.item.id)}
            <span>{this.props.item.title}</span>
          </div>
        </a>
      </li>
    );
  }
}
