import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const customStyles: any = {
  content: {
    top: '54%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '',
    height: '90%'
  },
};

const EnquiryModal = ({ isShow, closeModal, heading, about, Close, list, type, ...otherProps }: any) => {
  var url = localStorage.getItem('Url');
  var port =localStorage.getItem('Port');
  const [loading, setLoading] = useState(false)
  const [inputValue, setInputValue] = useState({
    fname: '',
    lname: '',
    email: '',
    message: ''
  });

  const { fname, lname, email, message } = inputValue

  const inputFieldHandleer = (e: any) => {
    const { name, value } = e.target;
    setInputValue((prevState: any) => ({
      ...prevState,
      [name]: value
    }))
  };

  const isSubmit = async (e: any) => {
    e.preventDefault();

    // console.log(combData, "---");
    // let data = combData;
    const jsonData = {
      code:0,
      fName: fname,
      lName: lname,
      emailId: email,
      msg: message
    };
    console.log(jsonData, "json data of post");
    //  closeModal()
    try {
      // setLoading(true);
      console.log(url+':'+port+'/api/AddIntersted');
      const response = await fetch(
        url+':'+port+'/api/AddIntersted',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "CompCode": "ESWEB",
            "FYear": "0"
          },
          body: JSON.stringify(jsonData),
        }
      );
      const jsonResult = await response.json();
      console.log(jsonResult, "res json data");

      if(jsonResult.status == 1){
        alert(jsonResult.msg)
        setInputValue({
          fname: '',
          lname: '',
          email: '',
          message: ''
        });
        closeModal()
        // setLoading(false);
      }
    } catch (e) {
      // setLoading(false);
      alert("error" + e);
    }
  };

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
        <form onSubmit={isSubmit}>
                <div className="row">
                  <div className="form-group col-md-6  mb-2">
                    <label className='form-label'>First Name</label>
                    <input type="text" className="form-control" id="FiratName" autoComplete='off' name='fname' value={fname} onChange={inputFieldHandleer} required />
                  </div>
                  <div className="form-group col-md-6 mb-2">
                    <label className='form-label'>Last Name</label>
                    <input type="text" className="form-control" id="LastName" autoComplete='off' placeholder="" name='lname' value={lname} onChange={inputFieldHandleer} required />
                  </div>
                </div>
                <div className="form-group mb-2">
                  <label className='form-label'>Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="" autoComplete='off' name='email' value={email} onChange={inputFieldHandleer} required />
                </div>
                
                <div className="form-group  mb-2">
                  <label className='form-label'>Message</label>
                  <textarea className="form-control" id='textArea' rows={3} placeholder="" autoComplete='off' name='message' value={message} onChange={inputFieldHandleer} required></textarea>
                </div>
                
                <div className="d-flex justify-content-center justify-content-lg-start mt-4">

                  <button className='btnn btn-primary' type='submit'>Submit</button>
                </div>
              </form>
        </Modal.Body>
        {/* <Modal.Footer>
                <Button onClick={closeModal}>{Close}</Button>
               </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default EnquiryModal