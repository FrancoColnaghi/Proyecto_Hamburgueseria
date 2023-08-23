import React from 'react'
import {NavLink} from 'react-router-dom';

export const Options = () => {
    return (
        <div className='options-cont'>
            <ul className='options'>
                <li>
                    <NavLink to="/hamburguesas"
                             className={({isActive}) => isActive ? "activado line" : "line"}
                    >Hamburguesas</NavLink>
                </li>
                <li>
                    <NavLink to="/pedido"
                             className={({isActive}) => isActive ? "activado line" : "line"}
                    >Pedido</NavLink>
                </li>
                <li>
                    <NavLink to="/nosotros"
                             className={({isActive}) => isActive ? "activado line" : "line"}
                    >Nosotros</NavLink>
                </li>
            </ul>
        </div>
  )
}
