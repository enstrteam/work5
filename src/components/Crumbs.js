import React from "react";
import style from "./Main/Main.module.scss";

function Crumbs(props) {
  return (
    <div className={style.crumbs}>
      <span>
        Главная &nbsp;
        {props.menu[props.selectedMenuId - 1].title !== "Главная" && 
          (<svg
            width="8"
            height="9"
            viewBox="0 0 8 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 4.5L1 8"
              stroke="#656565"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        )}
        {props.menu[props.selectedMenuId - 1].title !== "Главная" && " " + props.menu[props.selectedMenuId - 1].title}
      </span>
    </div>
  );
}

export default Crumbs;
