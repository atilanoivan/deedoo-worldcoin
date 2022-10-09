import "./App.css";
import Navbar from "./components/global/Navbar";
import Buttons from "./components/deedoo/Buttons";
import Footer from "./components/global/Footer";
import Login from "./components/deedoo/Login";
import BackingForm from "./components/deedoo/BackingForm";
import LearningForm from "./components/deedoo/LearningForm";
import TeachingForm from "./components/deedoo/TeachingForm";
import React, { useState, useEffect } from "react";

const config = {
  projectId: '8cfa08919878a7997aafa3d51bfea954',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3modal'
  }
}

function Home() {
  const [form, setForm] = useState("");
  const [merkleRoot, setMerkleRoot] = useState("");
  const [nullifierHash, setNullifierHash] = useState("");
  const [proof, setProof] = useState("");
  
  const selectForm = (form) => {
    setForm(form);                
  };
  const selectMerkleRoot = (merkleRoot) => {
    setMerkleRoot(merkleRoot);                
  };
  const selectNullifierHash = (nullifierHash) => {
    console.log("nullifierHash2: " + nullifierHash);
    setNullifierHash(nullifierHash);                
  };
  const selectProof = (proof) => {
    setProof(proof);                
  };


  return (
    <>
      <Navbar nullifierHash={nullifierHash} selectForm={(form) => selectForm(form)}
              
      />
      {nullifierHash ? (
        <div className="container-home">
        {form=='teaching' ? 
          <TeachingForm selectForm={(form) => selectForm(form)}/>
        : form=='backing' ? 
          <BackingForm selectForm={(form) => selectForm(form)}/>
        : form=='learning' ? 
          <LearningForm selectForm={(form) => selectForm(form)}/>
        :
          <Buttons selectForm={(form) => selectForm(form)}/>
        }
        </div>
      ) :  (
        <div className="container-home">
        <Login 
          selectForm={(form) => selectForm(form)}
          selectMerkleRoot={(merkleRoot) => selectMerkleRoot(merkleRoot)}
          selectNullifierHash={(nullifierHash) => selectNullifierHash(nullifierHash)}
          selectProof={(proof) => selectProof(proof)}
          />
        
        </div>
      )}

      <Footer />
    </>
  );
}

export default Home;
