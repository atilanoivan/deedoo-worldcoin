import logo from './logo.svg';
import './App.css';
import { Router, Link } from "@reach/router";
import Home from "./Home";

import { useEffect, useState } from "react";

function App() {
 
  return (
    <Router>
    <Home path="/" default />
    {/*<Contacto path="contacto" /> */}
    {/*<Confirmacion path="confirmacion/:orderId/:tokenUrl/:nombreCliente/:authorization/:model/:firstName/:lastName/:vendorName/:fechaPago/:amount" /> */}     
    </Router>
  );
}

export default App;
