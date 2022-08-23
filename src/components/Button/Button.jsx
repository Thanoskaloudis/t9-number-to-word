import React from 'react'

export const Button = ({ type = 'button', value, onClick, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  )
}
