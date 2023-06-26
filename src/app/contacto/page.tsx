"use client"
import Footer from '@/components/footer/footer';
import NavBar from '@/components/nav/navBar';
import Style from './page.module.css';
import * as React from 'react';
import Form from '@/components/form/fom';
import ButtomWhat from '@/components/buttomWhat/buttomWhat';

function Contacto(){
    const navStyle = {
        fondo : {background:"linear-gradient(white,rgb(245, 245, 255))"},
        letter : {color: "#7c0000"},
        logo : {color: "blackRed"},
      }
    return(
        <section className={Style.container}>
            <NavBar navBarStyle={navStyle}></NavBar>
            <Form></Form>
            <ButtomWhat></ButtomWhat>         
            <Footer></Footer>
        </section>
    )
}

export default Contacto