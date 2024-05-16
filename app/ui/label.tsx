import React from 'react'

interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
    // esta interfaz hace que se seleccionen props de tipo input y aparezcan mas facil a la hora de escribir codigo en el html donde se requiera
  }


export default function Label({children,...props}: Props) {
  return (
    <label  {...props} className="block text-lg font-medium leading-6 text-gray-900">
    {children}
  </label>
  )
}
