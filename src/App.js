import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModalState: false,
      selectedMenuId: 1,
      menu: [
        {
          id: 1,
          title: "Главная",
          isSelected: false,
        },
        {
          id: 2,
          title: "Мои магазины",
          isSelected: false,
        },
        {
          id: 3,
          title: "Промоматериалы",
          isSelected: false,
        },
        {
          id: 4,
          title: "Статистика",
          isSelected: false,
        },
        {
          id: 5,
          title: "Баланс",
          isSelected: false,
        },
        {
          id: 6,
          title: "Персональные данные",
          isSelected: false,
        },
        {
          id: 7,
          title: "FAQ",
          isSelected: false,
        },
        {
          id: 8,
          title: "Техподдержка",
          isSelected: false,
        },
        {
          id: 9,
          title: "Выход",
          isSelected: false,
        },
      ],
    };
    this.showModal = this.showModal.bind(this);
    this.selectMenu = this.selectMenu.bind(this);
  }

  showModal() {
    this.setState({ showModalState: !this.state.showModalState });
  }

  selectMenu(id) {
    this.setState({ selectedMenuId: id });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Menu
            menu={this.state.menu}
            selectMenu={this.selectMenu}
            selectedMenuId={this.state.selectedMenuId}
          />
          <Main
            showModal={this.showModal}
            menu={this.state.menu}
            selectedMenuId={this.state.selectedMenuId}
          />
          {this.state.showModalState && (
            <Modal
              showModal={this.showModal}
              showModalState={this.state.showModalState}
            />
          )}
        </main>
        <footer></footer>
      </div>
    );
  }
}
