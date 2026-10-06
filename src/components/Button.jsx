import React from 'react'

const Button = (props) => {
  return (
    <button type="submit" className='bg-orange-500 rounded-md px-2 py-2 text-white hover:opacity-75' {...props}> {props.label}</button>
  )
}

export default Button
