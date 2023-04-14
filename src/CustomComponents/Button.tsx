import React from 'react'


interface ButtonProps {
    btnName:string,
    btnClassCat:string,
    width:string
}

export const Button = ({btnName,btnClassCat,width, ...rest}: ButtonProps) => {
  return (
    <>
      <button className={btnClassCat} style={{width}}>{btnName}</button>
    </>
  )
}
