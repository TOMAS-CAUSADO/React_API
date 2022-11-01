import React from 'react'

const variable = () => {
    const saludo = "Hola mundo"
    const imagen = "https://picsum.photos/200"
    const texto_alt = "Esto es una imagen"

  return (

    <div> {saludo} </div>
    <img src= "{imagen}" alt="{texto_alt}" />
  )
}

export default variable