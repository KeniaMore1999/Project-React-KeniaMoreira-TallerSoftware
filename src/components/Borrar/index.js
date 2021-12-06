import {BtnCar} from './styles'
import  AlertTemplate  from  'react-alert-template-basic' 
import  {  useAlert  }  from  'react-alert'

export const ButtonB = ({children, borrarCarrito, prod}) => {
    return (
        <BtnCar onClick={() => window.confirm("¿Desea eliminar el producto?")?borrarCarrito(prod):null} >{children}</BtnCar>
    )
}
