import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import Style from './navBar.module.css'
import LogoWhite from '../../../public/img/logo/white.png'
import LogoRed from '../../../public/img/logo/red.png'



function NavBar ({navBarStyle}:{navBarStyle:any}){
    const logo = (color:string)=>{
        if(color == "white"){{ return LogoWhite }}else if (color == "red") { return LogoRed}
        return LogoWhite;
    }
    return(
        <div className={Style.containerNav} style={navBarStyle.fondo}>
            <nav className={Style.nav}>
                <Image
                    className={Style.logo}
                    src={logo(navBarStyle.logo.color)}
                    alt="Logo de withenot"
                />
                <ul className={Style.nav}>
                    <li>
                        <Link className={Style.link} style={navBarStyle.letter} href={'./'}>Home</Link>
                    </li>
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