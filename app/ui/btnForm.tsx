import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // esta interfaz hace que se seleccionen props de tipo input y aparezcan mas facil a la hora de escribir codigo en el html donde se requiera
  }

export default function BtnForm(props) {
  return (
    <button
                type="submit"
                className="flex w-40 justify-center  rounded-md bg-green-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {props.children}
              </button>
  )
}
