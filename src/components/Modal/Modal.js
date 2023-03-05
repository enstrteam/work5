import React, { Component } from "react";
import styles from "./Modal.module.scss";

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className={styles.modal}>
        <div
          className={
            "col-md-8 col-lg-7 col-xl-6 col-xxl-5 p-4 " + styles.modal_window
          }
        >
          <div className="d-flex">
            <div
              className={"me-auto mb-4 mb-xl-5 " + styles.modal_window__title}
            >
              Создать магазин
            </div>
            <div
              className={styles.button_close}
              onClick={(event) => {
                this.props.showModal();
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8.5"
                  cy="8.5"
                  r="7.98683"
                  transform="rotate(0.088995 8.5 8.5)"
                  stroke="#656565"
                />
                <path
                  d="M5.94629 5.94621L10.9408 10.7489"
                  stroke="#656565"
                  stroke-linecap="round"
                />
                <path
                  d="M10.9409 5.95027L5.95037 10.7489"
                  stroke="#656565"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="gap-2 d-flex justify-content-between mb-3 mb-xl-4 ">
            <div className="col-5">
              Шаблон
              <div className="pt-1">
                <select
                  name="template"
                  id="1"
                  className="form-select py-2"
                  aria-label="Default select example"
                >
                  <option selected>Стандартный</option>
                  <option value="">Шаблон 1</option>
                  <option value="">Шаблон 2</option>
                  <option value="">Шаблон 3</option>
                </select>
              </div>
            </div>
            <div className="col-5">
              Цветовая схема
              <div className="pt-1">
                <select
                  name="template"
                  id="1"
                  className="form-select py-2"
                  aria-label="Default select example"
                >
                  <option selected>Классическая</option>
                  <option value="">Цветовая схема 1</option>
                  <option value="">Цветовая схема 2</option>
                  <option value="">Цветовая схема 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-4">
            Домен
            <div className="input-group pt-1">
              <input
                type="text"
                class="form-control"
                placeholder="Например: ivangrozniy"
                aria-label="Например: ivangrozniy"
                aria-describedby="basic-addon"
              />
              <span
                class="input-group-text px-3 px-sm-5 pt-2 pb-1"
                id="basic-addon"
              >
                .work5.ru
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4 mb-xl-5">
            <div className="d-none d-xl-inline me-2">
              <svg
                width="52"
                height="51"
                viewBox="0 0 52 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_11_289)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.9253 0.944702C39.7224 0.944702 50.9059 11.8313 50.9059 25.2595C50.9059 38.6878 39.7224 49.5743 25.9253 49.5743C12.1282 49.5743 0.944702 38.6878 0.944702 25.2595C0.944702 11.8313 12.1282 0.944702 25.9253 0.944702V0.944702Z"
                    stroke="#6666D2"
                    stroke-width="1.8894"
                    stroke-miterlimit="22.9256"
                  />
                  <path
                    d="M23.6895 27.3918H27.9092V12.8434H23.6895V27.3918ZM28.8269 29.2272H22.7718C22.2635 29.2272 21.8541 28.8179 21.8541 28.3095V11.9302C21.8541 11.4219 22.2635 11.0125 22.7718 11.0125H28.8269C29.3353 11.0125 29.7446 11.4219 29.7446 11.9302V28.3095C29.7446 28.8179 29.3353 29.2272 28.8269 29.2272Z"
                    fill="#6666D2"
                  />
                  <path
                    d="M23.6895 38.0894H27.9092V34.4366H23.6895V38.0894ZM28.8269 39.9248H22.7718C22.2635 39.9248 21.8541 39.5155 21.8541 39.0071V33.5189C21.8541 33.0105 22.2635 32.6012 22.7718 32.6012H28.8269C29.3353 32.6012 29.7446 33.0105 29.7446 33.5189V39.0071C29.7446 39.5155 29.3353 39.9248 28.8269 39.9248Z"
                    fill="#6666D2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11_289">
                    <rect width="51.8506" height="50.5145" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.warning_text}>
              В названии домена разрешены латиница и “-”, запрещается
              использовать словосочетание Work 5. После создания магазина Вы
              сможете прикрутить свой домен (например ivangrozniy.ru). Подробнее
              по{" "}
              <a className="text-decoration-none" href="">
                ссылке
              </a>
            </div>
          </div>
          <div className={"gap-2 d-flex " + styles.button_group}>
            <button
              type="button"
              className={"btn py-2 px-5 " + styles.cancel}
              onClick={(event) => {
                this.props.showModal();
              }}
            >
              Отмена
            </button>
            <button type="button" className="btn py-2 px-5 ">
              Создать
            </button>
          </div>
        </div>
      </div>
    );
  }
}
