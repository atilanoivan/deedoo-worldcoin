import React, { useState, useEffect } from "react";
import { WorldIDWidget } from '@worldcoin/id'

function Login (props){
    const [form, setForm] = useState(props.form);
    const [merkleRoot, setMerkleRoot] = useState(props.form);
    const [nullifierHash, setNullifierHash] = useState(props.form);
    const [proof, setProof] = useState(props.form);

    const selectForm = (form) => {
        console.log("Selected form1: " + form);
        setForm(form);   
        props.selectForm(form);                
    };

    const selectMerkleRoot = (merkleRoot) => {
        setMerkleRoot(merkleRoot);                
        props.selectMerkleRoot(merkleRoot);                
    };
    const selectNullifierHash = (nullifierHash) => {
        console.log("nullifierHash1: " + nullifierHash);
        setNullifierHash(nullifierHash);          
        props.selectNullifierHash(nullifierHash);                
    };
    const selectProof = (proof) => {
        setProof(proof);                
        props.selectProof(proof);                
    };

    return (
        <div className="container">
            <div className="section-title">
                <h2>LOG IN</h2>
                <div className="bar"></div>
                
                <img src="/images/dark_transparent_cropped.png" alt="logo" style={{height: '120px'}} />
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-xs-8">
                    <div className="single-blog-post">            
                    <WorldIDWidget
                    actionId="wid_365c1b857b79eba8af13f6732c196241" //Login Action 
                    signal="my_signal"
                    enableTelemetry
                    onSuccess={(verificationResponse) => {            
                        console.log(verificationResponse); 
                        
                        selectMerkleRoot(verificationResponse.merkle_root);
                        selectNullifierHash(verificationResponse.nullifier_hash);
                        selectProof(verificationResponse.proof);
                        }            
                    } 
                    onError={(error) => console.error(error)}
                    />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-xs-8">
                    <div className="single-blog-post">            
                        
                             
                    </div>
                </div>
            </div>                
        </div>
    );
}

export default Login;