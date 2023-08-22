import React from 'react'

export const Options = ({setOption}) => {
    return (
        <div className='options-cont'>
            <ul className='options'>
                <li onClick={()=>setOption(1)}>Hamburguesas</li>
                <li onClick={()=>setOption(2)}>Realizar un Pedido</li>
                <li onClick={()=>setOption(3)}>Nosotros</li>
            </ul>
        </div>
  )
}
