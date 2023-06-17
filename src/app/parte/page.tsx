import Footer from '@/components/footer/footer';
import NavBar from '@/components/nav/navBar';
import * as React from 'react';
import Style  from "./page.module.css"
import Image from 'next/image';
import ImgTv1 from "../../../public/img/parte/tv1.png"
import ImgTv2 from "../../../public/img/parte/tv2.png"
import ImgTv3 from "../../../public/img/parte/tv3.png"
import ImgTv4 from "../../../public/img/parte/tv4.png"


function Parte(){
    const navStyle = {
        fondo : {background:"linear-gradient(#ff3030,#ca1111)"},
        letter : {color: "white"},
        logo : {color: "white"},
    }
    return(
        <section>
            <NavBar navBarStyle={navStyle}></NavBar>
            <section className={Style.containerCarroussel}>
                <h3>Proyectos de TV en Chile (Dirección y Producción)</h3>
                <div className={Style.carroussel}>
                    <Image

                        className={Style.imgTv}
                        src={ImgTv1}
                        alt='image lineas para el fondo'
                        height={150}
                        width={150}
                    />
                    <Image 
                        className={Style.imgTv}
                        src={ImgTv2}
                        alt='image lineas para el fondo'
                        height={150}
                        width={150}
                    />
                    <Image 
                        className={Style.imgTv}
                        src={ImgTv3}
                        alt='image lineas para el fondo'
                        height={150}
                        width={150}
                    />
                    <Image 
                        className={Style.imgTv}
                        src={ImgTv4}
                        alt='image lineas para el fondo'
                        height={150}
                        width={150}
                    /> 
                </div>
            </section>

            <Footer></Footer>
        </section>
    )
}

export default Parte