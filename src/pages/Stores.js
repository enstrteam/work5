import React from "react";
import StoreManagement from "../components/StoresManagement/StoresManagement";
import Modal from "../components/Modal/Modal";

export const Stores = (props) => {
  return (
    <div>
      <StoreManagement
        showModal={props.showModal}
        menu={props.menu}
      />
      {props.showModalState && (
        <Modal
          showModal={props.showModal}
          showModalState={props.showModalState}
        />
      )}
    </div>
  );
};
