import React, { Component } from "react";
import style from "./Main/Main.module.scss";

export default class StoreManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thead: [
        {
          id: 1,
          name: "№",
        },
        {
          id: 2,
          name: "Название",
        },
        {
          id: 3,
          name: "Адрес",
        },
        {
          id: 4,
          name: "Действие",
        },
      ],
      tableData: [
        {
          id: 1,
          number: 12345,
          name: "Дипломная работа",
          url: "http://www.work5.ru/services",
        },
        {
          id: 2,
          number: 12346,
          name: "Дипломная работа",
          url: "http://www.work5.ru/services",
        },
        {
          id: 3,
          number: 12347,
          name: "Дипломная работа",
          url: "http://www.work5.ru/services",
        },
        {
          id: 4,
          number: 12345,
          name: "Дипломная работа",
          url: "http://www.work5.ru/services",
        },
        {
          id: 5,
          number: 12346,
          name: "Дипломная работа",
          url: "http://www.work5.ru/services",
        },
        {
          id: 6,
          number: 12347,
          name: "Дипломная работа",
          url: "http://www.work5.ru/services",
        },
        {
          id: 7,
          number: 12345,
          name: "Дипломная работа",
          url: "http://www.work5.ru/services",
        },
        {
          id: 8,
          number: 12346,
          name: "Дипломная работа",
          url: "http://www.work5.ru/services",
        },
        {
          id: 9,
          number: 12347,
          name: "Дипломная работа",
          url: "http://www.work5.ru/services",
        },
      ],
    };
    this.theadShow = this.theadShow.bind(this);
    this.tableDataShow = this.tableDataShow.bind(this);
  }

  theadShow() {
    return this.state.thead.map((item) => <th key={item.id}>{item.name}</th>);
  }

  tableDataShow() {
    return this.state.tableData.map((item) => (
      <tr key={item.id}>
        <td>{item.number}</td>
        <td className={style.second_td}>{item.name}</td>
        <td className={style.second_td}>{item.url}</td>
        <td className={style.last_td}>
          <div className="d-flex">
            <button className={style.button_edit}>
                <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66249 11.3433C1.59879 11.4159 1.52503 11.5301 1.49483 11.6548L0.548863 14.4188L0.592421 14.4294L3.48122 13.5443C3.57841 13.5238 3.68566 13.4618 3.80298 13.3581L11.4926 5.97679L9.36222 3.92037L1.67255 11.3017L1.66249 11.3433ZM0.521946 14.7204C0.478388 14.7099 0.43483 14.6993 0.357783 14.6367C0.280734 14.574 0.257312 14.4803 0.287516 14.3556L1.18992 11.581C1.22012 11.4563 1.29389 11.3421 1.36765 11.2279L1.37772 11.1863L9.1847 3.70132C9.23833 3.67029 9.33551 3.6498 9.369 3.70193L11.687 5.93583C11.7205 5.98795 11.7439 6.08166 11.6903 6.11269L3.82969 13.6287C3.82969 13.6287 3.81962 13.6703 3.77606 13.6597C3.66881 13.7218 3.56156 13.7839 3.41075 13.8354L0.521946 14.7204C0.46832 14.7515 0.424762 14.7409 0.381205 14.7304L0.521946 14.7204Z" fill="white"/>
                    <path d="M1.66249 11.3433C1.59879 11.4159 1.52503 11.5301 1.49483 11.6548L0.548863 14.4188L0.592421 14.4294L3.48122 13.5443C3.57841 13.5238 3.68566 13.4618 3.80298 13.3581L11.4926 5.97679L9.36222 3.92037L1.67255 11.3017L1.66249 11.3433ZM0.521946 14.7204C0.478388 14.7099 0.43483 14.6993 0.357782 14.6367C0.280734 14.574 0.257312 14.4803 0.287516 14.3556L1.18992 11.581C1.22012 11.4563 1.29389 11.3421 1.36765 11.2279L1.37772 11.1863L9.1847 3.70132C9.23833 3.67029 9.33551 3.6498 9.369 3.70193L11.687 5.93583C11.7205 5.98795 11.7439 6.08166 11.6903 6.11269L3.82969 13.6287C3.82969 13.6287 3.81962 13.6703 3.77606 13.6597C3.66881 13.7218 3.56156 13.7839 3.41075 13.8354L0.521946 14.7204C0.46832 14.7515 0.424763 14.7409 0.381205 14.7304L0.521946 14.7204Z" stroke="white" strokeWidth="0.363997" strokeMiterlimit="2.613" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.2371 3.16384L12.3675 5.22027L12.9742 4.61891C13.2625 4.3806 13.2325 3.93318 12.9779 3.65146L11.8524 2.58664C11.7419 2.47184 11.6548 2.45074 11.5241 2.4191C11.2627 2.35582 11.0147 2.42782 10.8337 2.60407L10.227 3.20542L10.2371 3.16384ZM12.3506 5.48029C12.3071 5.46974 12.3071 5.46974 12.3071 5.46974L9.98906 3.23584C9.95557 3.18371 9.93215 3.09001 9.98578 3.05898L10.6998 2.39556C10.9344 2.18828 11.2796 2.0958 11.5845 2.16963C11.7587 2.21182 11.9229 2.29559 12.0334 2.41039L13.1589 3.47521C13.5341 3.83015 13.5238 4.44389 13.1618 4.79639L12.4478 5.4598C12.3942 5.49083 12.3942 5.49083 12.3506 5.48029Z" fill="white" stroke="white" strokeWidth="0.363997" strokeMiterlimit="2.613" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.57669 3.79623L11.7071 5.85266L12.1865 5.39653L10.056 3.3401L9.57669 3.79623ZM11.6802 6.15426C11.6366 6.14371 11.6366 6.14371 11.6366 6.14371L9.31863 3.90981C9.28514 3.85769 9.26171 3.76398 9.31534 3.73295L9.9757 3.10057C9.98577 3.05899 10.0293 3.06953 10.0729 3.08008C10.1164 3.09063 10.16 3.10118 10.16 3.10118L12.478 5.33508C12.5216 5.34562 12.5115 5.3872 12.5014 5.42878C12.4914 5.47036 12.4813 5.51194 12.4813 5.51194L11.8209 6.14432C11.8109 6.1859 11.7673 6.17535 11.7238 6.1648C11.7238 6.1648 11.7238 6.1648 11.6802 6.15426Z" fill="white" stroke="white" strokeWidth="0.363997" strokeMiterlimit="2.613" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.0602 14.0806L2.01664 14.07L0.934683 13.0157C0.901193 12.9636 0.911261 12.922 0.921329 12.8804C0.974954 12.8494 1.01851 12.86 1.06207 12.8705L2.14403 13.9248C2.17752 13.9769 2.16745 14.0185 2.15738 14.0601C2.14731 14.1016 2.10376 14.0911 2.0602 14.0806Z" fill="white" stroke="white" strokeWidth="0.363997" strokeMiterlimit="2.613" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.77603 13.6597L3.73247 13.6492L1.44795 11.4674C1.41446 11.4153 1.39104 11.3216 1.44466 11.2906C1.49829 11.2595 1.59547 11.239 1.62896 11.2912L3.91348 13.4729C3.94697 13.5251 3.97039 13.6188 3.91677 13.6498C3.86314 13.6808 3.86314 13.6808 3.81958 13.6703L3.77603 13.6597Z" fill="white" stroke="white" strokeWidth="0.363997" strokeMiterlimit="2.613" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Редактировать
            </button>
            <button className={style.button_delete}>
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00005 1.23053L12.1428 12.7694" stroke="white" strokeLinecap="round"/>
                    <path d="M12.1429 1.2403L1.00911 12.7694" stroke="white" strokeLinecap="round"/>
                </svg>
                Редактировать
            </button>
          </div>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div className={style.storemanagement}>
        <div>
          <button onClick={(event) => {this.props.showModal();}}>
            <span className={style.add_icon}>+</span>Создать свой магазин
          </button>
        </div>
        <div className={style.wrapper}>
          <h1>Управление магазинами</h1>
          <div className={style.table_wrapper}>
            <table className="table align-middle">
              <thead>
                <tr>{this.theadShow()}</tr>
              </thead>
              <tbody>{this.tableDataShow()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
