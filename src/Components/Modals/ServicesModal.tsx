import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import About from '../About/About';


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

const ServicesModal = ({ isShow, closeModal,heading,about,Close,list,type, ...otherProps }: any) => {


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
                    {about}

                </Modal.Body>
                <Modal.Footer>
                <Button onClick={closeModal}>{Close}</Button>
               </Modal.Footer>
            </Modal>
        </>
    )
}

export default ServicesModal