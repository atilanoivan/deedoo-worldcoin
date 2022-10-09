import React, { useState } from "react";
import * as Icon from "react-feather";


const NavbarStyleTwo = (props) => {
  
  const [form, setForm] = useState(props.form);
  

    const selectForm = (form) => {
        console.log("Selected form1: " + form);
        setForm(form);   
        props.selectForm(form);                
    };
  

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  return (
    <header id="header" className="headroom navbar-style-two">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a  className="navbar-brand">
              <img src="/images/dark_transparent_cropped.png" alt="logo" style={{height: '57px'}} />
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item text-silver">
                {props.nullifierHash? (
                  <>                       
                      <h6> Hash: {props.nullifierHash} </h6> 
                  </>
                ):<>{props.nullifierHash}</>
                }
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarStyleTwo;
