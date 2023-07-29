import './style.css'

const Contact = () => {
  return (
    <>

      <section id="contact" className="contact">
        <div className="st-indus-bx-8 common-box-padding">
          <div className="wrapper">
            <div className="common-form-style default-three-row">
              <h2>Interested ?</h2>
              <div className="subhead">Find the answer to your questions:</div>
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
                <div className="form-group mb-2">
                <label className='form-label'>Email Address</label>
                  <input type="email" className="form-control" id="email" placeholder="" />
                </div>
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
     
        <a className='btnn btn-primary' href="mailto:`{email}`?subject={subject}&body={body}">Submit</a>
       
      
      </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact