import React from "react";
import { useMatches } from "react-router-dom";
import style from "./StoresManagement/StoresManagement.module.scss";

function Crumbs() {
  const matches = useMatches();
  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));
  return (
    <div className={"d-none d-sm-flex " + style.crumbs}>
      <span>
        {crumbs.map((crumb, index) => (
          <span key={index}>
            {index !== 0 && (
              <span>
                &nbsp;
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 4.5L1 8"
                    stroke="#656565"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                &nbsp;
              </span>
            )}
            {crumb}
          </span>
        ))}
      </span>
    </div>
  );
}

export default Crumbs;
