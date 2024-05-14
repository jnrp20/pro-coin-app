import React from "react";
import Style from "@/app/(componentes)/reg/page.module.css";
import NavBar from "@/app/ui/navBar";
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
            Graficas para entender mejor los patrones de gasto y ayudar en la toma de decisiones financieras.
            </li>
            <li>Completamente gratuita para todos los usuarios, sin costos ocultos ni suscripciones.</li>
            
          </ul>
        </div>
        <div className={Style.SubCont2}></div>
      </div>
    </div>
  );
}
