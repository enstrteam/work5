import React, { Component } from "react";
import StoreManagement from "../StoreManagement";
import style from "./Main.module.scss";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid pt-2">
        <StoreManagement showModal={this.props.showModal} />
      </div>
    );
  }
}
