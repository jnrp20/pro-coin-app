import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  // esta interfaz hace que se seleccionen props de tipo input y aparezcan mas facil a la hora de escribir codigo en el html donde se requiera
}

export function Input(props: Props) {
  return (
    <input
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 
    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2
    focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3"
      {...props}
    />
  );
}
