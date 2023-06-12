import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';

import Logo from '../../../public/img/logo/Recurso 3.png'
import Style from './navBar.module.css'


function NavBar (){
    return(
        <div className={Style.containerNav}>
            <nav className={Style.nav}>
                <Image
                    className={Style.logo}
                    src={Logo}
                    alt="Logo de withenot"
                />
                <ul className={Style.nav}>
                    <li>
                        <Link className={Style.link} href={'./'}>Home</Link>
                    </li>
                    <li>
                        <Link className={Style.link} href={'/somos'}>Somos</Link>
                    </li>
                    <li>
                        <Link className={Style.link} href={'/servicios'}>Servicios</Link>
                    </li>
                    <li>
                        <Link className={Style.link} href={'/parte'}>Fuimos parte de </Link>
                    </li>
                    <li>
                        <Link className={Style.link} href={'/contacto'}>Contacto</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar 