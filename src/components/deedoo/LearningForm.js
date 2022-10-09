import React, { useState, useEffect } from "react";

function LearningForm (props){
    const [form, setForm] = useState(props.form);
    const [newCourse, setShowNewCourse] = useState("");
    const [investment, setInvestment] = useState("");
    const [newPercent, setNewPercent] = useState("");
    const selectForm = (form) => {
        setForm(form);   
        props.selectForm(form);                
    };
    const showNewCourse = (newCourse) => {
        setShowNewCourse(newCourse);
    };
    
    const setChangeInvestment = (investment) => {
        setInvestment(investment);
        console.log(investment);
        document.getElementById("label-investment").value=investment;


        setNewPercent((Number(investment) / (Number(investment) + 0.2))*100);
    };
    
    return (
        <div className="container">
            <div className="section-title">
                <h2>BACKING</h2>
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

                          <div className="col-lg-4 col-md-4" >
                          <img src="/images/ethical.jpg" alt="logo"   style={{'width':'400px'}} />
                        </div>
                        <div className="col-lg-8 col-md-8" >

                            <div className="row">
                        
                                    
                                    
                            <div className="col-lg-12 col-md-12" >
                            <p className="course-detail-title">Applied Ethical Hacking and Rules of Engagement</p>                                    
                            </div>
                            <div className="col-lg-12 col-md-12" >
                            <p className="course-detail-subtitle">40h empirical knowledge of Cyber Security, Penetration Testing, Python Hacking, Kali Linux & Wazuh SIEM on Elastic Stack</p>
                            </div>        


                            

                            <div className="col-lg-6 col-md-6" >
                            <p className="course-detail-prices">
                                Course price: <label className="course-detail-price">.015 ETH</label> <br/>                                
                            </p>
                            </div>
                            

                            
                          </div>
                          <table style={{width: '100%'}}>
                                <tbody>
                                  <tr>
                            
                                    <td className="text-center">
                                      <div id='btnPagar'
                                        className="deedoo-button-back"                              
                                        >
                                        Buy
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
                                    
                            </div>
                        </div>
                        
                        <div className="row col-lg-12 col-md-12 col-xs-12">
                            <div className="course-card col-lg-6 col-md-6 col-sm-6 col-xs-12" onClick={() => {
                                    showNewCourse(true);
                                }}>
                                <div className="course-card-backer-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/R.jpg" alt="logo" style={{'max-height':'150px;'}} />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Learn Ethical Hacking From Scratch</p>                                    
                                    <p className="course-subtitle-card">Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts.</p>
                                    <p className="course-card-prices">
                                        Course price: <label className="course-card-price">.01 ETH</label>                                         
                                    </p>
                                    
                                </div>
                            </div>
                            <div className="course-card col-lg-6 col-md-6 col-sm-6 col-xs-12" onClick={() => {
                                    showNewCourse(true);
                                }}>
                                <div className="course-card-backer-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/photoshop.jpg" alt="logo"   style={{'max-height':'150px;'}} />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Adobe Photoshop CC Essentials Training Course</p>                                    
                                    <p className="course-subtitle-card">This Adobe Photoshop Essentials course will teach you Photoshop Retouching as well as Photoshop for graphic design.</p>
                                    <p className="course-card-prices">
                                        Course price: <label className="course-card-price">.0075 ETH</label> 
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className="row separator col-lg-12 col-md-12 col-xs-12" style={{'padding-top': '30px;'}}>
                            <div className="course-card col-lg-6 col-md-6 col-sm-6 col-xs-12" onClick={() => {
                                    showNewCourse(true);
                                }}>
                                <div className="course-card-backer-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/design.jpg" alt="logo"  style={{'max-height':'150px;'}}  />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Graphic Design Masterclass - Learn GREAT Design</p>                                    
                                    <p className="course-subtitle-card">The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator, InDesign,Design Theory, Branding and Logo Design</p>
                                    <p className="course-card-prices">
                                        Course price: <label className="course-card-price">.05 ETH</label> 
                                    </p>
                                </div>
                            </div>      

                             <div className="course-card col-lg-6 col-md-6 col-sm-6 col-xs-12" onClick={() => {
                                    showNewCourse(true);
                                }}>
                                <div className="course-card-backer-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/ethical.jpg" alt="logo"   style={{'max-height':'150px;'}} />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Applied Ethical Hacking and Rules of Engagement</p>                                    
                                    <p className="course-subtitle-card">40h empirical knowledge of Cyber Security, Penetration Testing, Python Hacking, Kali Linux & Wazuh SIEM on Elastic Stack</p>
                                    <p className="course-card-prices">
                                        Course price: <label className="course-card-price">.015 ETH</label> 
                                    </p>
                                </div>
                            </div>      
                            </div>
                            <div className="row separator col-lg-12 col-md-12 col-xs-12" style={{'padding-top': '30px;'}}>
                            <div className="course-card col-lg-6 col-md-6 col-sm-6 col-xs-12" onClick={() => {
                                    showNewCourse(true);
                                }}>
                                <div className="course-card-backer-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/html.jpg" alt="logo"   style={{'max-height':'150px;'}} />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Become a Certified HTML, CSS, JavaScript Web Developer</p>                                    
                                    <p className="course-subtitle-card">Complete coverage of HTML, CSS, Javascript while you Earn Four Respected Certifications</p>
                                    <p className="course-card-prices">
                                        Course price: <label className="course-card-price">.008 ETH</label> 

                                    </p>
                                </div>
                            </div>      
                            <div className="course-card col-lg-6 col-md-6 col-sm-6 col-xs-12" onClick={() => {
                                    showNewCourse(true);
                                }}>
                                <div className="course-card-backer-image col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                    <img src="/images/python.jpg" alt="logo"  style={{'max-height':'150px;'}}  />
                                </div>
                                <div className="course-card-text col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <p className="course-title-card">Learning Python for Data Analysis and Visualization</p>                                    
                                    <p className="course-subtitle-card">Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!</p>
                                    <p className="course-card-prices">
                                        Course price: <label className="course-card-price">.0125 ETH</label> 
                                    </p>
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

export default LearningForm