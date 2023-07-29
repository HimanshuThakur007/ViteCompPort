import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const customStyles:any = {
    content: {
        top: '54%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '',
        height:'90%'
    },
};

const EnquiryModal = ({ isShow, closeModal,heading,about,Close,list,type, ...otherProps }: any) => {


    return (
        <>
            <Modal
               type={type}
                show={isShow}
                onHide={closeModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
           
                <Modal.Header closeButton>
                    <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form method="post">
                <div className="row">
                  <div className="form-group col-md-6  mb-2">
                    <label className='form-label'>First Name</label>
                    <input type="text" className="form-control" id="FiratName" />
                  </div>
                  <div className="form-group col-md-6 mb-2">
                  <label className='form-label'>Last Name</label>
                    <input type="text" className="form-control" id="LastName" placeholder="" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-6  mb-2">
                    <label className='form-label'>Email</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group col-md-6 mb-2">
                  <label className='form-label'>Phone No</label>
                    <input type="number" className="form-control" id="LastName" placeholder="" min={0} maxLength={10} />
                  </div>
                </div>
                {/* <div className="form-group mb-2">
                <label className='form-label'>Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="" />
                </div> */}
                {/* <div className="form-group">
                  <input type="text" className="form-control" id="subject" placeholder="How can I help you?" />
                </div> */}
                <div className="form-group  mb-2">
                <label className='form-label'>Message</label>
                  <textarea className="form-control" id='textArea' rows={3} placeholder=""></textarea>
                </div>
                {/* <div className="form-group">
                  <input type="submit" className="btn btn-primary" value="Submit" />
                </div> */}
              </form>
              <div className="d-flex justify-content-center justify-content-lg-start mt-4">
        {/* <a className='btnn btn-primary' href=''>Submit</a> */}
        <a className='btnn btn-primary' >Submit</a>
       
      
      </div>
                </Modal.Body>
                {/* <Modal.Footer>
                <Button onClick={closeModal}>{Close}</Button>
               </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default EnquiryModal