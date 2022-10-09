import React, { useState, useEffect } from "react";

function TeachingForm (props){
    const [form, setForm] = useState(props.form);
    const [newCourse, setShowNewCourse] = useState("");

    const selectForm = (form) => {
        setForm(form);   
        props.selectForm(form);                
    };
    const showNewCourse = (newCourse) => {
        setShowNewCourse(newCourse);
    };

    
    return (
        <div className="container">
            <div className="section-title">
                <h2>TEACHING FORM</h2>
                <div className="bar"></div>
            </div>
            <div className="row justify-content-center">
                <div className="row justify-content-center">
                    

                    {newCourse?(
                        <>
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <div className="single-blog-post">            
                                <button className="deedoo-button-back"                
                                onClick={() => {
                                    showNewCourse(false);
                                }}
                                >{"< "}CANCEL</button>  
                                        
                            </div>
                        </div>
                        <div className="billing-details">
              
                        <form method="POST" id="payment-form" >
                          
                   
          
                          <div className="row pt-20">
                            <div className="col-lg-12 col-md-12" >
                              <div className="form-group">
                                <label>
                                  Title <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="nombre"
                                  maxLength="20"
                                  id="nombre"
                                  
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="form-group">
                                <label>
                                  Description <span className="required">*</span>
                                </label>
                                <textarea
                                  type="text"
                                  className="form-control"
                                  name="apellido"
                                  
                                  maxLength="25"
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12" >
                              <div className="form-group">
                                <label>
                                  Image <span className="required">*</span>
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                  name="nombre"
                                  maxLength="20"
                                  id="nombre"
                                  
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12" >
                              <div className="form-group">
                                <label>
                                  Price <span className="required">ETH  </span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="nombre"
                                  maxLength="20"
                                  id="nombre"
                                  style={{width:'200px'}}
                                /> 
                              </div>
                            </div>
                          </div>
                          
                          
          
                          
          
                          
                          <div className='row' id="botones_pagar" >
                            <div className='col-12'>
                              <table style={{width: '100%'}}>
                                <tbody>
                                  <tr>
                            
                                    <td className="text-center">
                                      <div id='btnPagar'
                                        className="deedoo-button-back"                              
                                        >
                                        Save
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          
                        </form>
                        
                      </div>
                      </>
                    ):(
                        <>
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <div className="single-blog-post">            
                                <button className="deedoo-button-back"                
                                onClick={() => {
                                    selectForm("");
                                }}
                                >{" < "}BACK</button> 

                                <button className="deedoo-button-back"                
                                onClick={() => {
                                    showNewCourse(true);
                                }}
                                >{" + "}NEW COURSE</button>            
                            </div>



                            




                        </div>
                        
                        <div className="row col-lg-12 col-md-12 col-xs-12">
                            <div className="course-card col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="course-card-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/R.jpg" alt="logo"  />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Learn Ethical Hacking From Scratch</p>                                    
                                    <p className="course-subtitle-card">Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts.</p>
                                </div>
                            </div>
                            <div className="course-card col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="course-card-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/photoshop.jpg" alt="logo"  />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Adobe Photoshop CC Essentials Training Course</p>                                    
                                    <p className="course-subtitle-card">This Adobe Photoshop Essentials course will teach you Photoshop Retouching as well as Photoshop for graphic design.</p>
                                </div>
                            </div>
                            <div className="course-card col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="course-card-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/design.jpg" alt="logo"  />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Graphic Design Masterclass - Learn GREAT Design</p>                                    
                                    <p className="course-subtitle-card">The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator, InDesign,Design Theory, Branding and Logo Design</p>
                                </div>
                            </div>      

                             <div className="course-card col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="course-card-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/ethical.jpg" alt="logo"  />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Applied Ethical Hacking and Rules of Engagement</p>                                    
                                    <p className="course-subtitle-card">40h empirical knowledge of Cyber Security, Penetration Testing, Python Hacking, Kali Linux & Wazuh SIEM on Elastic Stack</p>
                                </div>
                            </div>      
                            <div className="course-card col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="course-card-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/html.jpg" alt="logo"  />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Become a Certified HTML, CSS, JavaScript Web Developer</p>                                    
                                    <p className="course-subtitle-card">Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications</p>
                                </div>
                            </div>      
                            <div className="course-card col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="course-card-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/python.jpg" alt="logo"  />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Learning Python for Data Analysis and Visualization</p>                                    
                                    <p className="course-subtitle-card">Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!</p>
                                </div>
                            </div>                         
                        </div>
                        </>
                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default TeachingForm