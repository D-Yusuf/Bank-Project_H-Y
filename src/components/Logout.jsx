import React from "react";
import Modal from "./Modal/Modal";
import { deleteToken } from "../api/storage";

const Logout = () => {
  return (
    <Modal className="min-w-[200px] min-h-[200px] z-50">
      <h1>You are logging out of your account</h1>
      <button onClick={deleteToken}>logout</button>
    </Modal>
  );
};

export default Logout;
