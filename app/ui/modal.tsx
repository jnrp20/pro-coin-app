import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <p> al registrarse acepta los</p>

      <button
        className=" text-green-500  font-normal  text-sm   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Terminos y condiciones del servicio
      </button>
      {showModal ? (
        <>
          <div className="justify-center mt-20 h-4/5 flex overflow-x-hidden   fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  mx-auto max-w-6xl " >
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t ">
                  <h3 className="text-3xl font-semibold">
                    Terminos y condiciones del servicio BUM WALLET
                  </h3>

                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto mt-0  " >
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed ">
                    1. Introducción Bienvenido a Bum Wallet, una aplicación
                    diseñada para ayudarle a gestionar sus finanzas personales
                    de manera eficiente. Al utilizar nuestra aplicación, usted
                    acepta y está de acuerdo con los siguientes Términos y
                    Condiciones. Por favor, léalos cuidadosamente antes de
                    empezar a utilizar nuestros servicios.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    2. Descripción del Servicio Bum Wallet ofrece una variedad
                    de herramientas y funciones para ayudarle a gestionar sus
                    finanzas personales, incluyendo: Categorizar Transacciones:
                    Facilita el análisis y la planificación financiera al
                    categorizar automáticamente sus transacciones. Registro de
                    Ingresos y Egresos: Permite registrar fácilmente cada
                    ingreso y egreso, manteniendo un seguimiento preciso de sus
                    finanzas. Gráficos Financieros: Proporciona gráficos
                    detallados para entender mejor sus patrones de gasto y
                    asistir en la toma de decisiones financieras.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    3. Gratuito para Todos los Usuarios Bum Wallet es
                    completamente gratuita. No hay costos ocultos, suscripciones
                    ni tarifas adicionales por el uso de la aplicación.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    4. Uso de la Aplicación 4.1 Registro y Seguridad de la
                    Cuenta Para utilizar Bum Wallet, es posible que deba
                    registrarse y crear una cuenta. Usted es responsable de
                    mantener la confidencialidad de su información de cuenta y
                    contraseña, así como de todas las actividades que ocurran
                    bajo su cuenta.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    4.2 Exactitud de la Información Usted se compromete a
                    proporcionar información precisa y actualizada sobre sus
                    transacciones y finanzas. Bum Wallet no se hace responsable
                    de cualquier error o inexactitud en los datos ingresados por
                    el usuario.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    4.3 Uso Adecuado Usted se compromete a no utilizar la
                    aplicación para ningún propósito ilegal o no autorizado. El
                    uso de la aplicación debe cumplir con todas las leyes y
                    regulaciones locales, estatales, nacionales e
                    internacionales aplicables.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    5. Propiedad Intelectual Todos los derechos de propiedad
                    intelectual relacionados con Bum Wallet, incluidos pero no
                    limitados a software, logotipos, gráficos y marcas, son
                    propiedad exclusiva de Bum Wallet y sus licenciantes. Usted
                    no tiene derecho a copiar, modificar, distribuir, vender o
                    alquilar ninguna parte de nuestros servicios o software.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    6. Limitación de Responsabilidad Bum Wallet se proporciona
                    "tal cual" y "según disponibilidad". No garantizamos que la
                    aplicación esté libre de errores o interrupciones. En la
                    medida máxima permitida por la ley, Bum Wallet no será
                    responsable de ningún daño directo, indirecto, incidental,
                    especial, consecuente o punitivo que surja del uso o
                    incapacidad de usar la aplicación.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    7. Modificaciones a los Términos y Condiciones Nos
                    reservamos el derecho de modificar estos Términos y
                    Condiciones en cualquier momento. Cualquier cambio será
                    efectivo inmediatamente después de su publicación en nuestra
                    aplicación. Su uso continuado de la aplicación después de la
                    publicación de los cambios constituye su aceptación de los
                    nuevos términos.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    8. Terminación Podemos suspender o terminar su acceso a la
                    aplicación en cualquier momento y por cualquier motivo,
                    incluyendo, pero no limitado a, si usted viola estos
                    Términos y Condiciones.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    9. Protección de Datos Personales Bum Wallet cumple con la
                    Ley 1581 de 2012 de Protección de Datos Personales y sus
                    decretos reglamentarios en Colombia. A continuación, se
                    detallan nuestros compromisos y prácticas respecto a la
                    protección de sus datos personales:
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    9.1 Recolección y Uso de Datos Personales Recopilamos y
                    utilizamos sus datos personales únicamente para los fines de
                    proporcionar y mejorar nuestros servicios. Esto incluye la
                    información que usted nos proporciona al registrarse, así
                    como los datos de sus transacciones financieras.
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    9.2 Consentimiento Al utilizar Bum Wallet, usted otorga su
                    consentimiento expreso para la recolección, almacenamiento,
                    uso y procesamiento de sus datos personales de acuerdo con
                    estos Términos y Condiciones y nuestra Política de
                    Privacidad.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    9.3 Derechos del Titular Usted tiene derecho a acceder,
                    actualizar, rectificar y eliminar sus datos personales.
                    También puede solicitar prueba de la autorización otorgada y
                    ser informado sobre el uso que se ha dado a sus datos. Para
                    ejercer estos derechos, puede contactarnos a través de
                    nuestro soporte al cliente dentro de la aplicación o a
                    través de nuestro correo electrónico de contacto.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    9.4 Medidas de Seguridad Implementamos medidas técnicas,
                    administrativas y físicas razonables para proteger sus datos
                    personales contra acceso no autorizado, pérdida, destrucción
                    o alteración. Sin embargo, ningún sistema es completamente
                    seguro, y no podemos garantizar la seguridad absoluta de su
                    información.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    9.5 Transferencia de Datos No compartimos ni transferimos
                    sus datos personales a terceros sin su consentimiento,
                    excepto cuando sea necesario para cumplir con obligaciones
                    legales o contractuales.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    10. Contacto Si tiene alguna pregunta sobre estos Términos y
                    Condiciones, puede contactarnos a través de nuestro soporte
                    al cliente dentro de la aplicación o a través de nuestro
                    correo electrónico de contacto.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    11. Ley Aplicable Estos Términos y Condiciones se regirán e
                    interpretarán de acuerdo con las leyes del país en el que
                    resida el usuario.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">
                    Gracias por utilizar Bum Wallet. Esperamos que encuentre
                    nuestra aplicación útil para la gestión de sus finanzas
                    personales.
                  </p>
                  <p className="my-4 text-blueGray-500 text-normal leading-relaxed">Fecha de Última Actualización: 25 DE MAYO DE 2024</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
