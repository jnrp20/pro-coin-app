
import React from "react";
import Style from "@/app/(componentes)/reg/page.module.css";
import NavBar from "@/app/ui/navBar";
import Image from "next/image";
import FormRegister from "@/app/ui/formRegister";





export default function Register() {
  

  return (
    <div>
      <NavBar />
      <div className={Style.container}>
        <div className={Style.SubCont1}>
          <h1>Con BumWallet: Domina tus Finanzas. Ordena tu dinero</h1>
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
            <h2>PROXIMAMENTE DOSPONIBLE EN</h2>
          <div className={Style.StoreLogo}>
            <Image src="/media/apple.svg" width={184} height={50} alt="" />
            <Image src="/media/google.svg" width={184} height={50} alt=""/>
            <Image src="/media/huawei.png" width={184} height={50} alt=""/>
          </div>
        </div>
        <div className={Style.SubCont2}>
          <div className={Style.form}>
            <Image src="/media/trueno.png" width={50} height={50} alt="" />
            <h1>Registrate</h1>
            <FormRegister/>
          </div>
        </div>
      </div>
    </div>
  );
}
