import React from 'react'


export const Button = ({btnName,btnClassCat,width,onClick, ...rest}: any) => {
  return (
    <>
      <button className='btn' onClick={onClick} style={{background: '#015ca4',color: '#fff', padding: '10px 20px',borderRadius:'8px',boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2)'}}>{btnName}</button>
    </>
  )
}
