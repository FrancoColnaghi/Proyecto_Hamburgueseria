import React from 'react'
import ListaOlimpo from './prueba.json'

export const Hamburguesas = () => {

    const listaObjetos = ListaOlimpo.map((o,i)=>{
        return (
            <div className='hamb-card' key={i}>
                <img></img>
                <div className='info'>
                    <h3 className='name'>{o.name}</h3>
                    <ul className='condimentacion'>
                        {o.condimentos.map((cond,i)=>{
                            return <li key={"line" + i}>{cond}</li>
                        })}
                    </ul>
                </div>
            </div>
        )
    })

    return (
        <section className='hamb-cont'>
                {listaObjetos}
        </section>
    )
}
