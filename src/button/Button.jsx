import React from "react";
import "./Button.scss"
import cx from "classnames";

export const Button = (props) => {
  const { 
    textContent,
    onClick,
    active,
    className
  } = props
  return (
    <button className={cx("button", active ? "active" : "inactive", className)} onClick={onClick}>
      {textContent}
    </button>
  )
}