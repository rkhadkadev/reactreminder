import React from 'react'

export const Button = (props) => {
  let bgColor, textColor = "";
  if(props.type === "Secondary") {
    bgColor="bg-gray-300"
    textColor = "text-black"
  } else {
    bgColor="bg-orange-500"
    textColor = "text-white"
  }
  return (
    <button type="submit" className={`${bgColor} rounded-md mx-2 px-2 py-2 ${textColor} hover:opacity-75`} {...props}> {props.label}</button>
  )
}

export default Button