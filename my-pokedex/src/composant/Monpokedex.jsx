import React from 'react'
import "./Footer.css";
import Header from "../composant/header.jsx";
import Footer from "./Footer.jsx";
import ".header.css";
export default function Monpokedex() {
    return (
        <div className ="header">
             <input type="button" class="button" value="Recherche"/>
            <Header/>
            <Footer/>
            </div>

             

    
  );
}

