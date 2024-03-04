import logo4 from'../assets/img/logo4.gif';
import CartWidget from './CartWidget';
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {

    const estilos = {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        border: '5px solid black',
        margin: '10px'
    }

    return (
        <>
    <nav className='navBar'>
        <img className='icono' style={estilos} src={logo4} alt="logo" />
        <ul >
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Quienes Somos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <div>
            < CartWidget />
        </div>
    </nav>
        </>
    )
}