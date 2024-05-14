import React from 'react'
import st from "./BtnLogin.module.css";
import Link from 'next/link';
function BtnLogin() {
  return (
 <div className={st.btnLogin}>

<Link href="/login">Iniciar Sesion</Link>

 </div>

  )
}

export default BtnLogin
