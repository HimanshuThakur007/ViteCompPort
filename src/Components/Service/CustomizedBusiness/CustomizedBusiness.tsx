import React from 'react'

const CustomizedBusiness = ({imgsrc,imgalt,caption}:any) => {
    return (
        <>
        <li className='customized-business-list to-load loaded'>
            <figure>
                <img className='img-cust' src={imgsrc} alt={imgalt} />
            </figure>
            <figcaption>
                <p>{caption}</p>
            </figcaption>
            </li>
            </>
    )
}

export default CustomizedBusiness