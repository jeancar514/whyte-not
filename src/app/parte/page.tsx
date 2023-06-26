"use client"
import Footer from '@/components/footer/footer';
import NavBar from '@/components/nav/navBar';
import * as React from 'react';
import Style  from "./page.module.css"
import Image from 'next/image';
import ImgCDTv1 from "../../../public/img/parte/CARRUSEL1/1.png"
import ImgCDTv2 from "../../../public/img/parte/CARRUSEL1/2.png"
import ImgCDTv3 from "../../../public/img/parte/CARRUSEL1/3.png"
import ImgCDTv4 from "../../../public/img/parte/CARRUSEL1/4.png"
import ImgCDTv5 from "../../../public/img/parte/CARRUSEL1/5.png"
import ImgCDTv6 from "../../../public/img/parte/CARRUSEL1/6.png"

import ImgTv1 from "../../../public/img/parte/CARRUSEL2/1.png"
import ImgTv2 from "../../../public/img/parte/CARRUSEL2/2.png"
import ImgTv3 from "../../../public/img/parte/CARRUSEL2/3.png"
import ImgTv4 from "../../../public/img/parte/CARRUSEL2/4.png"

import facebook from "../../../public/img/parte/FACEBOOK.png"
import instagram  from "../../../public/img/parte/INSTAGRAM.png"
import whatsapp from "../../../public/img/parte/WHATSAPP.png"
import { Button, Card, CardBody, CardFooter, CardHeader, Heading,Link,Text } from '@chakra-ui/react';
import ButtomWhat from '@/components/buttomWhat/buttomWhat';


function Parte(){
    const navStyle = {
        fondo : {background:"linear-gradient(white,rgb(245, 245, 255))"},
        letter : {color: "#7c0000"},
        logo : {color: "blackRed"},
      }
    return(
        <section className={Style.container}>
            <NavBar navBarStyle={navStyle}></NavBar>
            <video autoPlay loop className={Style.banner}>
                <source src="/img/parte/banner.mp4" type="video/mp4" />
            </video>
            <Button variant='solid' className={Style.buttonBanner} colorScheme='red' size='lg' >
                Contáctanos
            </Button>
            <h3 className={Style.title}>
                Estas son algunas de las empresas con las que whyte not ha tenido el privilegio de trabajar en proyectos de marketing digital.  Estamos orgullosos de haber colaborado con cada una de ellas y estamos agradecidos por la confianza que han depositado en nosotros. Entre las empresas con las que hemos trabajado se encuentran algunas reconocidas como marcas lideres en sus respectivos sectores, asi como pequeñas y medianas empresas que buscan hacer crecer su presencia online.
            </h3>     
            <section className={Style.containerCarroussel}>
                <h3>Proyecto de comunicación corporativa y desarrollo de contenidos para la compañía de TV en Chile (Dirección y Producción)</h3>
                <div className={Style.slider}>
                    <div className={Style.slidetrack}>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv1} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv2} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv3} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv4} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv5} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv6} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv1} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv2} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv3} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv4} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv5} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgCDTv6} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={Style.containerCarroussel2}>
                <h3>Proyectos de TV en Chile (Dirección y Producción)</h3>
                <div className={Style.slider2}>
                    <div className={Style.slidetrack2}>
                        <div className={Style.slide2}>
                            <Image src={ImgTv1} alt=""/>
                        </div>
                        <div className={Style.slide2}>
                            <Image src={ImgTv2} alt=""/>
                        </div>
                        <div className={Style.slide2}>
                            <Image src={ImgTv3} alt=""/>
                        </div>
                        <div className={Style.slide2}>
                            <Image src={ImgTv4} alt=""/>
                        </div>
                        <div className={Style.slide2}>
                            <Image src={ImgTv1} alt=""/>
                        </div>
                        <div className={Style.slide2}>
                            <Image src={ImgTv2} alt=""/>
                        </div>
                        <div className={Style.slide2}>
                            <Image src={ImgTv3} alt=""/>
                        </div>
                        <div className={Style.slide2}>
                            <Image src={ImgTv4} alt=""/>
                        </div>

                    </div>
                </div>
            </section>
            <section className={Style.containerContacto} >
                <h3>
                    ¿Y tú qué esperas para trabajar con nosotros?
                </h3>
                <section className={Style.redesSociales}>
                    <div>
                        <Image src={facebook} alt=""/>
                        <h4 style={{color:"black"}}>SÍGUENOS EN FACEBOOK</h4>
                        <h4 style={{color:"#ff3030"}}>WHYTE NOT MARKETING</h4>
                    </div>
                    <div>
                        <Image src={instagram} alt=""/>
                        <h4 style={{color:"black"}}>SÍGUENOS EN INSTAGRAM</h4>
                        <h4 style={{color:"#ff3030"}}>@WHYTENOT.MARKETING</h4>
                    </div>
                    <div>
                        <Image src={whatsapp} alt=""/>
                        <h4 style={{color:"black"}}>CONTÁCTANOS</h4>
                        <h4 style={{color:"#ff3030"}}>CLICK AQUÍ</h4>
                    </div>
                </section>
            </section> 
            <ButtomWhat></ButtomWhat>         
            <Footer></Footer>
        </section>
    )
}

export default Parte