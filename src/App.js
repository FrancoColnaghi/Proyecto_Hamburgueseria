import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Options } from './components/Options';
import { Hamburguesas } from './components/Hamburguesas';
import { Pedido } from './components/Pedido';
import { Nosotros } from './components/Nosotros';

function App() {

  // CONTROL PARA MOSTRAR OPCION SELECCIONADA.
  let [hamb,setHamb] = useState(true);
  let [pedido,setPedido] = useState(false);
  let [nosotros,setNosotros] = useState(false);
  let [option,setOption] = useState(1);
  useEffect(()=>{
    if (option==1) {
      setHamb(true);
      setNosotros(false);
      setPedido(false);
    }
    if (option==2) {
      setHamb(false);
      setNosotros(false);
      setPedido(true);
    } 
    if (option==3) {
      setHamb(false);
      setNosotros(true);
      setPedido(false);
    } 
  })

  return (
    <div className="App-header">
      <Header />
      <Options setOption={setOption} />
      { hamb && <Hamburguesas />}
      { pedido && <Pedido />}
      { nosotros && <Nosotros />}
    </div>
  );
}

export default App;
