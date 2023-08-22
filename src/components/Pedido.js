import React, { useEffect, useState } from 'react'
import ListaOlimpo from './prueba.json'

export const Pedido = () => {

  //Array para almacenar los productos del carrito
  const [carrito,setCarrito] = useState([]);
  const [total, setTotal] = useState(0)

  //Funcion para agregar un producto al carrito
  const agregarAlCarrito = (o)=>{
    //const target = e.target;
    console.log("largo del carrito: " + carrito.length)
    console.log("objeto a agregar: " + o.name)

    //Extraigo un array con los nombres de los productos q estan en el carrito
    let carritoNames = [];
    carrito.map((obj)=>{
      carritoNames.push(obj.name)
    })

    //si el producto está en el carrito sumo uno en su propiedad CANT
    let nuevo_carrito = [];
    if (carritoNames.includes(o.name)){
      console.log("ya esta en el carrito")
      carrito.forEach(element => {
          if (element.name == o.name){
            element.cant = element.cant + 1;
            nuevo_carrito = [...carrito]
          }
      });
    }else{ 
      //si el producto NO está en el carrito, lo agrego.
      nuevo_carrito = [...carrito, {name: o.name,
                                          precio: o.precio,
                                          cant: 1}]
    }

    //controlar el total del ticket
    setTotal(0)
    nuevo_carrito.forEach(element=>{
      setTotal(total + element.precio)
    })
    setCarrito(nuevo_carrito)
  }

  //prueba
  useEffect(()=>{
    console.log("Estado carrito: ")
    console.log(carrito)
  })

  //Generar la linea HTML de la carta
  const carta = ListaOlimpo.map((o,i)=>{
    return  <li className='line-carta' key={i}>
              <p className='name'>{o.name}</p>
              <p className='price'>${o.precio}</p>
              <button value={o.name}
                      onClick={()=>agregarAlCarrito(o)}>+</button>
            </li>
  })

  //Generar la linea HTML del Tiket
  const ticket = carrito.map((o,i)=>{
    return  <React.Fragment key={i}>
              <li className='line-ticket' key={i}>
                <p className='name'>{o.name}</p>
                <p className='price'>${o.precio * o.cant}</p>
                <p className='cant'>{o.cant} u.</p>
              </li>
              {i === carrito.length - 1 ? <p>Total: ${total}</p> : null}
            </React.Fragment>
  })
  
  return (
    <div className='pedido-cont'>
      <ul className='carta'>
        <h4>Carta</h4>
        {carta}
      </ul>
      <ul className='ticket'>
        <h4>Carrito</h4>
        {ticket}
      </ul>
    </div>
  )
}
