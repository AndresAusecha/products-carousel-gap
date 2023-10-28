import { useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, isOpen, modalId }) => {
  const ref = useRef();
  ref.current = document.createElement('div');
  ref.current.classList.add('modal-content');
  ref.current.setAttribute("id", modalId)

  if(!isOpen) {
    if (modalRoot.contains(ref.current)) {
      modalRoot.removeChild(ref.current);
    }
    modalRoot.querySelectorAll(`#${modalId}`).forEach((node) => {
      modalRoot.removeChild(node)
    })
    document.getElementById("root").classList.remove("fixed-content");
    return null
  }
  
  document.getElementById("root").classList.add("fixed-content");
  if (!modalRoot.contains(ref.current)) {
    modalRoot.appendChild(ref.current);
    return createPortal(
      children,
      ref.current
    )
  }

  return null;
}