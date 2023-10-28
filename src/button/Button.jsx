import React from "react";
import "./Button.scss"
import cx from "classnames";

export const Button = (props) => {
  const { 
    textContent,
    onClick,
    active
  } = props
  return (
    <button className={cx("button", active ? "active" : "inactive")} onClick={onClick}>
      {textContent}
    </button>
  )
}