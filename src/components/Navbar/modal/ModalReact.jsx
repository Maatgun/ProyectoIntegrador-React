import React from "react";
import Modal from "react-modal";
import { SlClose } from "react-icons/sl";
import {ButtonModal } from "./ModalStyled";

const customStyles = {
      overlay: {
        background: "rgba(0, 0, 0, 0.5)",
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        border: "1px solid",
        background: "#f8f8f8",
        maxWidth: "80%",
        maxHeight: "80vh", 
  },
};

export const ModalCarrito = ({ modalIsOpen, closeModal, mensaje, aceptarClick }) => {

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <SlClose onClick={closeModal} size={20} style={{ cursor: "pointer"}} />
      <h2>{mensaje}</h2>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center" }}>
        <ButtonModal onClick={() => { aceptarClick(); closeModal(); }}>Aceptar</ButtonModal>
        <ButtonModal onClick={closeModal}>Cancelar</ButtonModal>
      </div>
    </Modal>
  );
};

export default ModalCarrito;