import Footer from '@/components/footer/footer';
import NavBar from '@/components/nav/navBar';
import Style from './page.module.css';
import * as React from 'react';
import Form from '@/components/form/fom';

function Contacto(){
    const navStyle = {
        fondo : {background:"linear-gradient(#ff3030,#ca1111)"},
        letter : {color: "black"},
        logo : {color: "blackRed"},
    }
    return(
        <section className={Style.container}>
            <NavBar navBarStyle={navStyle}></NavBar>
            <Form></Form>         
            <Footer></Footer>
        </section>
    )
}

export default Contacto