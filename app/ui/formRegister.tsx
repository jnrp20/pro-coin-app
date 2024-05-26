"use client";

import Style from "@/app/(componentes)/reg/page.module.css";
import Label from "@/app/ui/label";
import BtnForm from "@/app/ui/btnForm";
import { Input } from "@/app/ui/input";
import { createUser } from '../api/user/route';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react';
import Modal from "./modal";

export default function FormRegister() {
    // para que el reset() no de error hay que agregarle <HTMLFormElement> al useRef
    const formRef = useRef<HTMLFormElement>(null); 
    async function validForm(formData:FormData) {
    



        const result =await createUser(formData);

        if (result?.error) {
            // se usó la herramiwnta react-toastify para esto
            

            toast.error(result.error, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
                });
        } else{
            
            toast.success(result?.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Slide,
                });
                if (formRef.current) {

                    // aparece error en reset() pero sirve 
                    // para que el reset() no de error hay que agregarle <HTMLFormElement> al useRef de arriba
                    formRef.current.reset();
                }
            
        }
    }
  return (
    


      <form action={validForm} id='formReg' ref={formRef}>
              <br />
              <Label htmlFor="name">Nombre de usuario</Label>
              <Input
                placeholder="UserName"
                type="text"
                id="name"
                name="UserName"
                required
              />
              <br />
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                placeholder="yourEmail@example.com"
                type="email"
                id="email"
                name="Email"
                required
              />
              <br />
              <Label htmlFor="password">Contraseña</Label>
              <Input
                placeholder="******************"
                type="password"
                id="password"
                name="PassWord"
                required
              />
              
              <br />
              <Label htmlFor="Confpassword">Confirmar contraseña</Label>
              <Input
                placeholder="******************"
                type="password"
                id="Confpassword"
                name="ConfPass"
                required
              />
<br />
                La contraseña debe incluir: 
              <ul>
                <li>Minimo 8 caracteres</li>
                <li>un caracter especial (! @ # $ % ^ & * - + ¿ ? )</li>
                <li>un número</li>
                <li>una letra mayúscula</li>
              </ul>
              <br />
              <div className={Style.boton}>
                <BtnForm>Registrarse</BtnForm>
                <br />

                <Modal/>
              </div>


              {/* esto es para mostrar el toast del error o de la creación exitosa. se usó la herramiwnta react-toastify  */}
              <ToastContainer />
            </form>
   
  )
}
