"use client"
import Footer from '@/components/footer/footer';
import NavBar from '@/components/nav/navBar';
import * as React from 'react';
import Style  from "./page.module.css"
import Image from 'next/image';
import ImgTv1 from "../../../public/img/parte/tv1.png"
import ImgTv2 from "../../../public/img/parte/tv2.png"
import ImgTv3 from "../../../public/img/parte/tv3.png"
import ImgTv4 from "../../../public/img/parte/tv4.png"
import ImgEmpPriv from "../../../public/img/parte/samsung.png"
import { Button, Card, CardBody, CardFooter, CardHeader, Heading,Link,Text } from '@chakra-ui/react';
import ButtomWhat from '@/components/buttomWhat/buttomWhat';


function Parte(){
    const navStyle = {
        fondo : {background:"linear-gradient(#ff3030,#ca1111)"},
        letter : {color: "black"},
        logo : {color: "blackRed"},
    }
    return(
        <section className={Style.container}>
            <NavBar navBarStyle={navStyle}></NavBar>
            <section className={Style.containerCarroussel}>
                <h3>Proyectos de TV en Chile (Dirección y Producción)</h3>
                <div className={Style.slider}>
                    <div className={Style.slidetrack}>
                        <div className={Style.slide}>
                            <Image src={ImgTv1} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgTv2} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgTv3} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgTv4} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgTv1} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgTv2} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgTv3} alt=""/>
                        </div>
                        <div className={Style.slide}>
                            <Image src={ImgTv4} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={Style.containerCard}>
                <Card align='center' className={Style.card}>
                    <CardHeader>
                        <Heading size='xl'className={Style.cardTitle}> Empresa Privada </Heading>
                    </CardHeader>
                    <CardBody className={Style.cardImg}>
                        <Image src={ImgEmpPriv} alt=""  />
                    </CardBody>
                    <CardFooter>
                        <Text className={Style.cardContent}>Proyecto de comunicación corporativa y desarrollo de contenidos para la compañía.</Text>
                    </CardFooter>
                </Card>
            </section>
            <section className={Style.containerContacto} >
                <h3>
                    ¿Y tú qué esperas para trabajar con nosotros?
                </h3>
                <Button variant='solid' colorScheme='red' >
                    <Link  className={Style.contactoLink} href={'https://wa.link/t1uxho'}>CONTRÁTANOS</Link>
                </Button> 
            </section> 
            <ButtomWhat></ButtomWhat>         
            <Footer></Footer>
        </section>
    )
}

export default Parte