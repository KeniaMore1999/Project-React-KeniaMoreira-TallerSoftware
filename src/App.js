import { Fragment, useState,  useEffect, useRef, useContext} from 'react'
import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import  AlertTemplate  from  'react-alert-template-basic' 
import  {  useAlert  }  from  'react-alert'
import  React  from "react";

export const Cantidad = React.createContext()
export const Datos = React.createContext()

const informacion = {
  articulos: [
    {id: 1, nombre: 'Homepod Mini', precio: 99, imagen: '/images/homepod-mini.jpg'},
    {id: 2, nombre: 'iMac', precio: 1200, imagen: '/images/imac.jpeg'},
    {id: 3, nombre: 'iPad Mini', precio: 400, imagen: '/images/ipad-mini.jpg'},
    {id: 4, nombre: 'iPhone 13 Pro', precio: 1100, imagen: '/images/iphone13-pro.jpg'},
    {id: 5, nombre: 'Macbook Pro', precio: 1600, imagen: '/images/macbook-pro.png'}
  ],
  carrito: []
}

function App() {
  const [data, setData] = useState(informacion)
  const [cantidad,setCantidad]=useState(0)
  const erased = useRef()
  const agregarAlCarro = (producto) => {
    if (data.carrito.find(x => x.id === producto.id)) {
      const carritoCopia = data.carrito.map(x => x.id === producto.id ? ({...x, cantidad: x.cantidad + 1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }
    data.carrito.push({...producto, cantidad: 1})
    setData({...data})
  }
  const borrarCarrito = (producto) => {
    if (data.carrito.find(x => x.id === producto.id)) {
      data.carrito.forEach((x,index) =>{   
        if( x.id === producto.id){
          erased.current=producto.nombre;
          data.carrito.splice(index,1);
        }
      })
      setData({...data})
    }
  }

  <Cantidad.Provider value={cantidad}>
      <Datos.Provider value={data}>
      <Fragment>
        <Navbar cantidad={cantidad} productos={data.carrito}  borrarCarrito={borrarCarrito}/>
        <Articulos agregarAlCarro={agregarAlCarro} data={data} erased={erased}/>
      </Fragment>
      </Datos.Provider>
    </Cantidad.Provider>
  
  useEffect(() => {
    setCantidad(data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)) 
   }, [data]);

  return (
    <Fragment>
      <Navbar cantidad={cantidad} productos={data.carrito} borrarCarrito={borrarCarrito} />
      <Articulos agregarAlCarro={agregarAlCarro} data={data} erased={erased}/>
    </Fragment>
  );
}

export default App;
