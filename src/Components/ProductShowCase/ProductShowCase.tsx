import React from 'react';
import sk from '../../Images/digital-marketing-img.png'
import bg from '../../Images/comprehensiveGSTModule.png'
import { CardComp } from '../../CustomComponents/CardComp';
import { Button } from '../../CustomComponents/Button';
import { ProductCard_leftImg, ProductCard_rightImg } from '../../CustomComponents/ProductCard/ProductCard';
import {FaArrowCircleRight} from 'react-icons/fa'

const ProductShowCase = () => {
  let iconStyle = {color:'Tomato'}
  return (
    <>

      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">

          <ProductCard_leftImg src={bg} icon={<FaArrowCircleRight size={40} style={iconStyle}/>} title='Busy Customization' text='BUSY streamlines GST compliance for your business so you don’t need to worry about GST updates and changes in GST laws. The complete GST module includes a range of GST features, including GST invoicing, easy GST return filing, auto-generation of e-way bills and e-invoices, GSTIN verification, complete GST reports, and much more. BUSY helps you avoid all kinds of GST non-compliance penalties' />

          <ProductCard_rightImg rsrc={sk} icon={<FaArrowCircleRight size={40} style={iconStyle}/>} rtitle='Customised ERP' rtext='BUSY is a powerful accounting software that helps streamline and control your business finances, track and analyse income and expenses, and more. Key features include complete books of accounting, sales and purchase analysis, bank reconciliation, and comprehensive reporting. BUSY is your complete business accounting solution' />

          <ProductCard_leftImg src={bg} icon={<FaArrowCircleRight size={40} style={iconStyle}/>} title='Comprehensive GST Module' text='BUSY streamlines GST compliance for your business so you don’t need to worry about GST updates and changes in GST laws. The complete GST module includes a range of GST features, including GST invoicing, easy GST return filing, auto-generation of e-way bills and e-invoices, GSTIN verification, complete GST reports, and much more. BUSY helps you avoid all kinds of GST non-compliance penalties' />

          <ProductCard_rightImg rsrc={sk} icon={<FaArrowCircleRight size={40} style={iconStyle}/>} rtitle='Financial Accounting' rtext='BUSY is a powerful accounting software that helps streamline and control your business finances, track and analyse income and expenses, and more. Key features include complete books of accounting, sales and purchase analysis, bank reconciliation, and comprehensive reporting. BUSY is your complete business accounting solution' />

          <div className='col-12 d-flex justify-content-center'>
            <Button btnName='View all features' />

          </div>
        </div>
      </section>
    </>
  )
}

export default ProductShowCase