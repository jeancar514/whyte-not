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
            <Footer></Footer>
        </section>
    )
}

export default Parte