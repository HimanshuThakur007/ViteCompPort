import React from 'react';
import {Form, Col} from 'react-bootstrap'

interface InputFieldProps{
    label: string,
    htmlFor: string,
    ipType: string,
    defaultt: any,
    name:string,
    classCategory:string,
    handleChange:any,
    ipTitle:any,
    readOnly:any

}

export const InputField = ({label,classCategory,htmlFor,ipType,defaultt,name,handleChange,ipTitle,readOnly, ...rest}:InputFieldProps) => {
  return (
   
    <>
            <label htmlFor={htmlFor} style={{ fontSize: '1rem' }} className="form-label col-2 labl ml-2 mr-2 mt-2 labl2">{label}</label>
            <input type={ipType} defaultValue={defaultt} name={name} className={classCategory} min='0' onBlur={handleChange} title={ipTitle} readOnly={readOnly} autoComplete="off" style={{ borderColor: "#86a4c3" }} required />
        </>
   
  )
}

interface Iprops{
  lab:string,
  cl: string,
  type:string
}

export const InputField2 = ({lab,cl,type}:Iprops) => {
  return (
  <>
  <Form.Label column sm={2}>
         {lab}
        </Form.Label>
        <Col sm={10}>
          <Form.Control type={type} className={cl} />
        </Col>
  </>
  )
}

