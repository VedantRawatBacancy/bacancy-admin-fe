import React from 'react'

function Button(props) {
  return (
    <button className={`${props.buttonColor} border-2  p-5 rounded-md`} onClick={(props.functionCall)}>
        {props.name}
    </button>
  )
}

export default Button