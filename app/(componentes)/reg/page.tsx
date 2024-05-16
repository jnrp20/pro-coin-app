import React from "react";
import Style from "@/app/(componentes)/reg/page.module.css";
import NavBar from "@/app/ui/navBar";
import Image from "next/image";
import { Input } from "@/app/ui/input";
import Label from "@/app/ui/label";
import BtnForm from "@/app/ui/btnForm";

export default function Register() {
  return (
    <div>
      <NavBar />
      <div className={Style.container}>
        <div className={Style.SubCont1}>
          <h1>BumWallet: Domina tus Finanzas. Ordena tu dinero</h1>
          <br />
          <p>
            Experimenta la Facilidad, la Rapidez y la Intuitividad: La App que
            Transformará tu Gestión Financiera, Disponible las 24 Horas, los 7
            Días de la Semana.{" "}
          </p>
          <br />

          <ul className={Style.lista}>
            <li>
              {" "}
              Categoriza las transacciones para facilitar el análisis y la
              planificación financiera.
            </li>
            <li>
              Registra fácilmente cada ingreso y egreso, permitiendo mantener un
              seguimiento preciso de sus finanzas.
            </li>
            <li>
              Graficas para entender mejor los patrones de gasto y ayudar en la
              toma de decisiones financieras.
            </li>
            <li>
              Completamente gratuita para todos los usuarios, sin costos ocultos
              ni suscripciones.
            </li>
          </ul>
          <br />
{/* <h2>PROXIMAMENTE DOSPONIBLE EN</h2>
<Image src="/apple.svg" width={184} height={50} />
<Image src="/google.svg" width={184} height={50} /> */}

        </div>
        <div className={Style.SubCont2}>
          <div className={Style.form}>
            <Image src="/trueno.png" width={50} height={50} />
            <h1>Registrate</h1>
            <form>
              <br />
              <Label htmlFor="name">Nombre de usuario</Label>
              <Input placeholder="UserName" type="text" id="name" required />
              <br />
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                placeholder="yourEmail@example.com"
                type="text"
                id="email"
                required
              />
              <br />
              <Label htmlFor="password">Contraseña</Label>
              <Input
                placeholder="******************"
                type="password"
                id="password"
                required
              />
              <br />
              <Label htmlFor="Confpassword">Confirmar contraseña</Label>
              <Input
                placeholder="******************"
                type="password"
                id="Confpassword"
                required
              />
              <br />
              <BtnForm>Registrarse</BtnForm>
                <br />
              <p>
                Al dar click acepto los <a href="">terminos y condicines</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
