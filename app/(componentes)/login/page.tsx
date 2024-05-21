import NavBar from "@/app/ui/navBar";
import React from "react";
import Image from "next/image";
import style from "@/app/(componentes)/login/page.module.css";
import { Input } from "@/app/ui/input";
import Label from "@/app/ui/label";
import BtnForm from "@/app/ui/btnForm";
export default function Login() {
  return (
    <div>
      <NavBar/>
      

      <div className={style.container}>
        <form className={style.formContainer}>
          <Image src="/media/avatar.svg" width={100} height={100} alt=""/>
          <br />
          <h1>INICIAR SESION</h1>
          <div className={style.form}>
            <Label htmlFor="Email">Correo Electronico</Label>
            <Input
              placeholder="Email"
              type="email"
              required
              id="Email"
              name="Email"
            />
            <Label htmlFor="Password">Contraseña</Label>
            <Input
              placeholder="**********"
              type="password"
              required
              id="Password"
              name="Password"
            />
          </div>
          <BtnForm>Ingresar</BtnForm>
          <br />
          <a href="">Olvide mi contraseña</a>
        </form>


     <div className={style.img}>
         <Image src="/media/telefono.svg" width={350} height={700} alt=""/>
     </div>
     <div className={style.circle}></div>
     {/* <div className={style.img2}>
         <Image src="/media/telefono2.svg" width={400} height={700} />
     </div> */}
      </div>
    </div>
  );
}
