
const EnquiryForm = () => {
  let intrestedList: any = [
    {
      value: 1,
      label: 'Busy Add-on (Customization Of Busy Software)'

    },
    {
      value: 2,
      label: 'Excellent PAY ( Payroll Software)'

    },
    {
      value: 3,
      label: 'CL + ( Customer Loyality)'

    },
    {
      value: 4,
      label: 'Kart Manager ( For Online Market Place Sellers)'

    },
    {
      value: 5,
      label: 'Busy (Business Accountion Software)'

    },
    {
      value: 6,
      label: 'InfoServe ( Distributor Management System)'

    },
    {
      value: 7,
      label: 'Cutomised Software'

    },
    {
      value: 8,
      label: 'Training  & Implementation'

    },
    {
      value: 9,
      label: 'Excellent ERP'
      
    },
    {
      value: 10,
      label: 'Excellent SFA'
      
    },
    {
      value: 11,
      label: 'Mobile App Development'
      
    },
    {
      value: 12,
      label: 'Web Development'
      
    },
    {
      value: 13,
      label: 'Saas App Development'
      
    },
    {
      value: 14,
      label: 'Others'

    },

  ]

  return (
    <div>
      <section id="enquiry" className="enquiry">
        <div className="inner-page-header section-padding style-dark"  style={{padding:' 60px 0px'}}>
          <div className="container" data-aos="fade-up">
            <div className="page-title-inner text-center clearfix">
              <div className="heading-wrapper">
                <h1 className="h1">Enquiry Form</h1>
                <div className="lead-text">
                  <p>
                    What makes a great company? It's really easy. It's also the
                    people that are working here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about-section">
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-12">
              <div className="contact-info-box wow fadeInLeft" data-wow-delay="0.8s">
                <div className="heading-wrapper with-separator">
                  <span className="sub-title"></span>
                  <h2 className="h1">
                    <span>Interested ?</span>
                  </h2>
                </div>
                <div className="contact-form">
                  <form method="post">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label className="form-label">Name (Company Name)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="FiratName"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Contact Person</label>
                        <input
                          type="text"
                          className="form-control"
                          id="LastName"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Contact Number</label>
                        <input
                          type="number"
                          min={0}
                          className="form-control"
                          id="email"
                          placeholder=""
                       
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Intersted In</label>
                        <select className="form-select selectstyle" name="intrestedlist" id="select">
                          <option value=''></option>
                      {intrestedList.map((items:any)=>(
                          <option value={items.value}>{items.label}</option>
                        ))}
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Existing Customer</label>
                        <select className="form-select selectstyle" name="intrestedlist" id="select">
                          <option></option>
                          <option value='yes'>Yes</option>
                          <option value='no'>No</option>
                          <option value='maybe'>Maybe</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Reference ( If Any)</label>
                        <select className="form-select selectstyle" name="intrestedlist" id="select">
                          <option value=''></option>
                          <option value='none'>None</option>
                          <option value='busyinfotech'>Busy Infotech</option>
                          <option value='other'>Other</option>
                      
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        placeholder=""
                        rows={4}
                      ></textarea>
                    </div>
                    {/* <label className="form-label">Fruit</label>
  <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
  <datalist id="datalistOptions">
    <option value="apple"/>
    <option value="orange"/>
    <option value="lemon"/>
    <option value="pear"/>
    <option value="grape"/>
  </datalist> */}
                    <div className="d-flex justify-content-center justify-content-lg-start mt-4">
                      <a className="btnn btn-primary">Submit</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
