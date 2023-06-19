import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import Style from './navBar.module.css'
import LogoWhite from '../../../public/img/logo/white.png'
import LogoBlackRed from '../../../public/img/logo/blackRed.png'



function NavBar ({navBarStyle}:{navBarStyle:any}){
    const logo = (color:string)=>{
        if(color == "white"){{ return LogoWhite }}else if (color == "red") { return LogoBlackRed}
        return LogoWhite;
    }
    return(
        <div className={Style.containerNav} style={navBarStyle.fondo}>
            <nav className={Style.nav}>
                <Link  href={'/'}>
                    <Image
                        className={Style.logo}
                        src={logo(navBarStyle.logo.color)}
                        alt="Logo de withenot"
                    />
                </Link>
                <ul className={Style.nav}>
                    <li>
                        <Link className={Style.link} style={navBarStyle.letter} href={'/somos'}>Somos</Link>
                    </li>
                    <li>
                        <Link className={Style.link} style={navBarStyle.letter} href={'/servicios'}>Servicios</Link>
                    </li>
                    <li>
                        <Link className={Style.link} style={navBarStyle.letter} href={'/parte'}>Fuimos parte de </Link>
                    </li>
                    <li>
                        <Link className={Style.link} style={navBarStyle.letter} href={'/contacto'}>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar 