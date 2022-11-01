import React from 'react'

const peticion = () => {
    const [personaje, setPersonajes] = React.useState ([])
    const [paginacion, setPaginacion] = React.useState (1)

    const obtenerPersonaje = async ()=>{

        try {
            const res = await fetch('https://simpsons-quotes-api.herokuapp.com/quotes/?page=' + (paginacion))
            const {quote} = await res.json()
            setPersonajes(quote)

        } catch (error) {
            console.log(error)
            
        }
    }

    const siguiente = async ()=>{

        await setPaginacion(paginacion +1 )
        obtenerPersonaje()
    }
    const atras = async ()=>{

        await setPaginacion(paginacion -1 )
        obtenerPersonaje()
    }

  return (
    <div>
        <h1>Peticion al Api Simpsons</h1>
        <button onClick={obtenerPersonaje}>Traer Personaje</button>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={atras}>Atras</button>


        {
            setPersonajes.map((resultado)=>(
                <div>
                    <h4>{resultado.character}-{resultado.quote}</h4>
                    <img src={resultado.image} alt={resultado.quote} />
                </div>
            ))
        }

    </div>
  )
}

export default peticion