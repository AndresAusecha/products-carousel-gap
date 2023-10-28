import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, isOpen }) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = document.createElement('div');
    modalRoot.appendChild(ref.current);
  }, []);

  if(!isOpen) {
    return null
  }
  
  return createPortal(
    children,
    ref.current
  )
}