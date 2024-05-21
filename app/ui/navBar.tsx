import React from "react";

import Image from "next/image";
import Link from "next/link";

// los estilos de este componente estan en el css global
export default function NavBar() {
  return (
    <nav>
      <div className="NavLogo">
        <Link href="/">
          <Image src="/logoBum.png" width={190} height={250} alt="" />
        </Link>
      </div>
      <div className="NavOptions">
        <Link href="/about">Sobre BumWallet</Link>
        <Link href="/donate">Apóyanos</Link>
        <Link href="/social">Nuestras Redes</Link>
        <Link href="/contact">Contactanos</Link>
      </div>
      <div className="NavRegister">
        <Link href="/reg">Resgistrarse</Link>

        <div className="btnLogin">
          <Link href="/login">Iniciar Sesion</Link>
        </div>
      </div>
    </nav>
  );
}
