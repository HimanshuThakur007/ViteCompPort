
import {useState } from 'react'
import ReactLoader from '../../CustomComponents/ReactLoader';
import Select from "react-select";
import { Helmet } from 'react-helmet';
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
    label: 'SaaS App Development'
    
  },
  {
    value: 14,
    label: 'Others'

  },

]

let existingCust: any = [
  {
    value: 1,
    label: 'Yes'

  },
  {
    value: 2,
    label: 'No'

  },
  {
    value: 3,
    label: 'Maybe'

  }

]

let referenceList: any = [
  {
    value: 1,
    label: 'Busy Infotech'

  },
  {
    value: 2,
    label: 'Other'

  },
  {
    value: 3,
    label: 'None'

  }

]



const EnquiryForm = () => {
  var url = localStorage.getItem('Url');
var port =localStorage.getItem('Port');
  const [loading, setLoading] = useState(false)
  const [intrested, setIntrested]:any = useState(null)
  const [existingOption, setExistingOption]:any = useState(null)
  const [intrestedName, setIntrestedName]:any = useState('')
  const [referenceName, setReferenceName]:any = useState('')
  const [existing, setExisting]:any = useState(0)
  const [reference, setReference]:any = useState(0)
  const [inputValue, setInputValue] = useState({
    cname: '',
    cperson: '',
    email: '',
    cNumber:'',
    message: '',
    country:''
  });

  const { cname, cperson,cNumber, email, message, country } = inputValue

  const inputFieldHandler = (e: any) => {
    const { name, value } = e.target;
    setInputValue((prevState: any) => ({
      ...prevState,
      [name]: value
    }))
  };


  const intrestedHandler = (options:any) => {
    let name=options.label
    setIntrested(options)
  
   setIntrestedName(name)
  };
  // const intrestedHandler = (event: any) => {
  //   const value: any = event.target.value;
  //   setIntrested(value)
  //   const da = intrestedList.find((item: any) => {
  //     return item.value == event.target.value;
  //   }); 
  //   let label = da.label
  //   console.log(label,'--------')
  //  setIntrestedName(label)
  // };

  const existingCustomer = (select: any) => {
    // const value: any = event.target.value;
    setExistingOption(select)
    setExisting(select.value)
  }

  const referenceHandler = (event: any) => {
    const value: any = event.target.value;
    setReference(value)
    const ref = referenceList.find((item:any)=>{
      return item.value == event.target.value
    })
    let label = ref.label
    setReferenceName(label)
  };
  //  console.log('*******',intrested)

  const isSubmit = async (e: any) => {
    e.preventDefault();

    // console.log(combData, "---");
    // let data = combData;
    const jsonData = {
      code:0,
      fName: cname,
      lName: cperson,
      emailId: email,
      contactNo:cNumber,
      country:country,
      intIn:intrestedName,
      exiCustomer:parseInt(existing),
      refName:referenceName,
      msg: message
    };
    // console.log(jsonData, "json data of post");

    try {
      setLoading(true);
      console.log(url+':'+port+'/api/AddEnquiry');
      const response = await fetch(
        url+':'+port+'/api/AddEnquiry',
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
      // console.log(jsonResult, "res json data");
    if(jsonResult.status == 1){
      alert(jsonResult.msg)
      setInputValue({
        cname: '',
        cperson: '',
        email: '',
        cNumber:'',
        message: '',
        country:''
    });
    setIntrested(null);
    setIntrestedName('');
    setExisting(0);
    setReference(0);
    setReferenceName('');
    setLoading(false);
    }
    } catch (e) {
      setLoading(false);
      alert("error" + e);
    }
  };

  const style = {
    control: (base:any) => ({
      ...base,
      borderBottom: "1px solid lightgrey",
      borderTop: "0px",
      borderLeft: "0px",
      borderRight: "0px",
      borderRadius: "0px"
     
    })
  };

  return (
    <div>
      {/* <section id="enquiry" className="enquiry">
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
      </section> */}
<Helmet>
                <title>Excellent softwares || Enquiry Page </title>
                <meta name="Enquiry Page" content="Enquiry page content" />
            </Helmet>
      <div className="about-section mt-3">
      {loading ? (
        <ReactLoader loaderClass="position-absolute" loading={loading} />
      ) : null}
        <div className="container">
          <div className="row justify-content-between">

            <div className="col-lg-12">
              <div className="contact-info-box wow fadeInLeft" data-wow-delay="0.8s">
                <div className="heading-wrapper with-separator">
                  <span className="sub-title"></span>
                  <h2 className="h1">
                    <span>Interested?</span>
                  </h2>
                </div>
                <div className="contact-form">
                  <form method="post" onSubmit={isSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label className="form-label">Name (Company Name)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="FiratName"
                          placeholder=""
                          name='cname'
                          value={cname}
                          onChange={inputFieldHandler}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Contact Person</label>
                        <input
                          type="text"
                          className="form-control"
                          id="LastName"
                          placeholder=""
                          name='cperson'
                          value={cperson}
                          onChange={inputFieldHandler}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder=""
                          name='email'
                          value={email}
                          onChange={inputFieldHandler}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Contact Number</label>
                        <input
                          type="number"
                          min={0}
                          className="form-control"
                          id="email"
                          name='cNumber'
                          placeholder=""
                          value={cNumber}
                          onChange={inputFieldHandler}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder=""
                          name='country'
                          value={country}
                          onChange={inputFieldHandler}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Interested In</label>
                        <Select
                        name='intrested'
                        options={intrestedList}
                        defaultValue={intrested}
                        onChange={intrestedHandler}
                        styles={style}
                        />
                        {/* <select className="form-select selectstyle" name="intrested" id="select" 
                        value={intrested} onChange={intrestedHandler}>
                          <option value=''></option>
                      {intrestedList.map((items:any)=>(
                          <option value={items.value}>{items.label}</option>
                        ))}
                        </select> */}
                      </div>

                      <div className="form-group col-md-6">
                        <label className="form-label">Existing Customer</label>
                        <Select
                        options={existingCust}
                        defaultValue={existingOption}
                        onChange={existingCustomer}
                        styles={style}
                        />
                        {/* <select className="form-select selectstyle" name="intrestedlist"
                         id="select" value={existing} onChange={existingCustomer}>
                          <option value=''></option>
                          {existingCust.map((items:any)=>(
                          <option value={items.value}>{items.label}</option>
                        ))}
                        </select> */}
                      </div>
                      <div className="form-group col-md-6">
                        <label className="form-label">Reference (If Any)</label>
                        <select className="form-select selectstyle" name="intrestedlist"
                         id="select" value={reference} onChange={referenceHandler}>
                          <option value=''></option>
                         {referenceList.map((item:any)=>(
                          <option value={item.value}>{item.label}</option>
                         ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        placeholder=""
                        rows={4}
                        name='message'
                        value={message}
                        onChange={inputFieldHandler}
                      ></textarea>
                    </div>
                    
                    <div className="d-flex justify-content-center justify-content-lg-start mt-4">
                      <button className="btnn btn-primary" type='submit'>Submit</button>
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
