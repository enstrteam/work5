import { Home } from "./pages/Home";
import { Stores } from "./pages/Stores";
import { Promo } from "./pages/Promo";
import { Statistics } from "./pages/Statistics";
import { Balance } from "./pages/Balance";
import { Profile } from "./pages/Profile";
import { FAQ } from "./pages/Faq";
import { Support } from "./pages/Support";
import { Exit } from "./pages/Exit";
import Layout from "./components/Layout/Layout";

import React, { Component } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModalState: false,
      selectedMenuId: 2,
      menu: [
        {
          id: 1,
          title: "Главная",
          url: "/",
          isSelected: false,
        },
        {
          id: 2,
          title: "Мои магазины",
          url: "/mystores",
          isSelected: false,
        },
        {
          id: 3,
          title: "Промоматериалы",
          url: "/promo",
          isSelected: false,
        },
        {
          id: 4,
          title: "Статистика",
          url: "/statistics",
          isSelected: false,
        },
        {
          id: 5,
          title: "Баланс",
          url: "/balance",
          isSelected: false,
        },
        {
          id: 6,
          title: "Персональные данные",
          url: "/profile",
          isSelected: false,
        },
        {
          id: 7,
          title: "FAQ",
          url: "/faq",
          isSelected: false,
        },
        {
          id: 8,
          title: "Техподдержка",
          url: "/support",
          isSelected: false,
        },
        {
          id: 9,
          title: "Выход",
          url: "/exit",
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
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route
          path="/"
          element={
            <Layout menu={this.state.menu} selectMenu={this.selectMenu} />
          }
          handle={{ crumb: () => <Link to="/">Главная</Link> }}
        >
          <Route index element={<Home />} />
          <Route
            path="mystores"
            element={
              <Stores
                menu={this.state.menu}
                showModal={this.showModal}
                showModalState={this.state.showModalState}
              />
            }
            handle={{ crumb: () => <Link to="mystores">Мои магазины</Link> }}
          />
          <Route
            path="promo"
            element={<Promo />}
            handle={{ crumb: () => <Link to="promo">Промоматериалы</Link> }}
          />
          <Route
            path="statistics"
            element={<Statistics />}
            handle={{ crumb: () => <Link to="statistics">Статистика</Link> }}
          />
          <Route
            path="balance"
            element={<Balance />}
            handle={{ crumb: () => <Link to="balance">Баланс</Link> }}
          />
          <Route
            path="profile"
            element={<Profile />}
            handle={{ crumb: () => <Link to="profile">Персональные данные</Link> }}
          />
          <Route
            path="faq"
            element={<FAQ />}
            handle={{ crumb: () => <Link to="faq">FAQ</Link> }}
          />
          <Route
            path="support"
            element={
              <Support
                handle={{ crumb: () => <Link to="support">Поддержка</Link> }}
              />
            }
          />
          <Route
            path="exit"
            element={<Exit />}
            handle={{ crumb: () => <Link to="exit">Выход</Link> }}
          />
        </Route>
      )
    );

    return <RouterProvider router={router} />;
  }
}
