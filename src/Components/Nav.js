import { NavLink } from "react-router-dom";
import Buscar from "./Buscar";
import Filtrar from "./Filtrar";
import Ordenar from "./Ordenar";
import '../Styles/Nav.css'

export default function Nav(){
    return <div className='nav'>
    <Buscar />
    <Filtrar />
    <Ordenar />
    <NavLink to='/Create'><button>Crear Actividad Turistica</button></NavLink>
    
</div>

}