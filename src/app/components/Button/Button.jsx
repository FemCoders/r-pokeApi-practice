import React from 'react'

function Button({children, action}) {
  return (
    <button onClick={action}>{children}</button>
  )
}

export default Button