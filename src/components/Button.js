import React from 'react'
import Style from './Button.module.css'

export default function Button(props) {
  return (
    <div>
      <button className={Style.btns}  onClick={props.onClick}>{props.name}</button>
    </div>
  )
}