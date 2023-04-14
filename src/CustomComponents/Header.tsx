import React from 'react'

interface HeaderProps {
    HeaderName:string
}

const Header = ({HeaderName}: HeaderProps) => {
  return (
    <>
    <span className='d-flex justify-content-center bg-secondary' style={{marginTop:'64px'}}>
    <h5 className='mt-1' style={{color:'white'}}>{HeaderName}</h5>
    </span>
    </>
  )
}

export default Header