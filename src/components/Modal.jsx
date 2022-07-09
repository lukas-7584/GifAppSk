import React from "react";

const modal = {
    position: "fixed",
    zIndex: "1",
    top: "207px",
    overflow: "auto",
    backgroundColor: "rgb(0 0 0 / 0%)"};


const close = {
    position: "absolute",
    top: 15,
    right: 35,
    color: "#f1f1f1",
    fontSize: 40,
    fontWeight: "bold",
    cursor: "pointer",
    padding: "0em 0.2em 0em 0.2em"
};

const modalContent = {
    display: "flex",
    width: "100%",
    height: "100%",
    margin: "auto"
};

export const Modal = ({ onOpen, children }) => {
    return <div onClick={onOpen}> {children}</div>;
};

export const ModalContent = ({ onClose, children }) => {
    return (
        <div style={modal}>
        <span style={close} onClick={onClose}>
            &times;
        </span>
        <div style={modalContent}>{children}</div>
    </div>
);
};