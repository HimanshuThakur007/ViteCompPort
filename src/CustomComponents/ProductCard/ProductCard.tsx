import { useState } from 'react'
import '../Cardstyle.css'
import { FaArrowCircleRight } from 'react-icons/fa'

export const ProductCard_leftImg = ({ style, src, alt, text, title, icon, text1, phead, onClick, textBold, secondaryText, src2, collapseItem }: any) => {
  const [show, setShow]: any = useState(false)
  const showHide = () => {
    setShow(!show)
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-5 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
          <img src={src} className="img-fluid" alt={alt} />
        </div>
        <div className="col-lg-7 pt-4 pt-lg-0 d-flex justify-content-center align-items-stretch content" data-aos="fade-left" data-aos-delay="100">

          <div className='card w-100 cardStyle' style={{ borderRadius: '20px', minHeight: '55vh' }}>
            <div className="card-body">
              <div className='col-12 d-lg-flex d-sm-block justify-content-between'>
                <span className='col-lg-8 col-12'>
                  <h2 className="card-title titleStyle" style={{ margin: '0 0 32px' }}>{title}</h2>
                </span>
                <span className='col-lg-4 col-12 d-lg-flex d-block justify-content-center' style={style}>
                  <img src={src2} className="ms-5 logo-dark" alt="logo" />
                </span>
                {/* <img className='img-fluid' src={src2} style={{width:'5vw'}}/> */}
              </div>
              <p className="card-text" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                {text}<br /> <a onClick={showHide} style={{ color: 'blue', cursor: 'pointer' }} className={`${show === true ? "d-none" : null}`}>{show === true ? <p>Read Less...</p> : <p>Read More...</p>}</a>
                {show === true ? (
                  <p className="card-text" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}> <b>{textBold}</b> <span>{secondaryText}</span> {collapseItem}
                    <a onClick={showHide} style={{ color: 'blue', cursor: 'pointer' }} className={`${show === true ? null : "d-none"}`}>{show === true ? <p>Read Less...</p> : <p>Read More...</p>}</a>
                  </p>
                ) : null}
              </p>
            </div>
            <div className='d-flex justify-content-end'>

              <button className='btn' onClick={onClick}>{icon}</button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}




export const ProductCard_rightImg = ({ style2, imgStyle, rsrc, rtext, rtitle, onClick, textBoldright, secondaryTextright, secondBold, rsrc2, collapseRight }: any) => {
  let iconStyle = { color: 'Tomato' }
  const [show, setShow]: any = useState(false)
  const showHide = () => {
    setShow(!show)
  }
  return (
    <>

      <div className="row">
        <div className="col-lg-7 order-lg-1 order-md-2 order-2 pt-lg-0 pt-5 d-flex justify-content-center content " data-aos="fade-left" data-aos-delay="100">

          {/* <CardComp title='Financial Accounting' text='BUSY is a powerful accounting software that helps streamline and control your business finances, track and analyse income and expenses, and more. Key features include complete books of accounting, sales and purchase analysis, bank reconciliation, and comprehensive reporting. BUSY is your complete business accounting solution' /> */}
          <div className='card w-100 cardStyle' style={{ borderRadius: '20px', minHeight: '55vh' }}>
            <div className="card-body">
              <div className='col-12 d-lg-flex d-sm-block  justify-content-between'>
                <span className='col-lg-8 col-12'>
                  <h2 className="card-title titleStyle" style={{ margin: '0 0 32px' }}>{rtitle}</h2>
                </span>
                <span className='col-lg-4 col-12 d-lg-flex d-block justify-content-center' style={style2}>
                  <img src={rsrc2} className="ms-5 logo-dark" alt="logo" />
                </span>
              </div>



              <p className="card-text" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                {rtext} <a onClick={showHide} style={{ color: 'blue', cursor: 'pointer' }} className={`${show === true ? "d-none" : null}`}>{show === true ? <p>Read Less...</p> : <p>Read More...</p>}</a>
              {show === true ? (
                <p className="card-text" style={{ fontSize: '1.2rem', fontStyle: 'italic' }}> {collapseRight} <b>{textBoldright}</b> <span>{secondBold}</span>
                  <a onClick={showHide} style={{ color: 'blue', cursor: 'pointer' }} className={`${show === true ? null : "d-none"}`}>{show === true ? <p>Read Less...</p> : <p>Read More...</p>}</a>
                </p>
              ) : null}
              </p>
            </div>
            <div className='d-flex justify-content-end'>

              <button className='btn' onClick={onClick}><FaArrowCircleRight size={40} style={iconStyle} /></button>
            </div>
          </div>

        </div>
        <div className="col-lg-5 order-lg-2 order-md-1 order-1 mt-4 m pt-lg-0  d-flex align-items-center " data-aos="fade-right" data-aos-delay="100">
          <img src={rsrc} className="img-fluid" alt="" style={imgStyle} />
        </div>
      </div>

    </>
  )
}

