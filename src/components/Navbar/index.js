import { Carro } from '../Carro'
import styles from './estilos'
import { NavCar } from './styles'
import { Cantidad, Datos } from "../../App"
import { useContext } from 'react'

export const Navbar = ({ cantidad, productos, borrarCarrito }) => {
        return (
        <NavCar style={styles.nav}>
            <p>React Kenia Moreira</p>
            <Carro cantidad={cantidad} productos={productos} borrarCarrito={borrarCarrito} />
        </NavCar>
    )
}