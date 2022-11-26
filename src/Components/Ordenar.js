import { useDispatch } from "react-redux"
import { sortCountriesAsc, sortCountriesDesc } from "../Redux/actions"
import '../Styles/Ordenar.css'

export default function Ordenar(){
    const dispatch=useDispatch()
    function handleChange(e){
        if(e.target.value==='Ascendente'){
            dispatch(sortCountriesAsc(e.target.name))
        }
        else if (e.target.value==='Descendente'){
            dispatch(sortCountriesDesc(e.target.name))
        }
        if(e.target.name==='nombre'){
            e.target.value='Ordenar X Nombre'
        }
        else{
            e.target.value='Ordenar X Poblacion'
        }
        
    }
    return <div className="ordenar">
        <div>
        <p>Ordenar X Nombre</p>
        <select name='nombre' onChange={handleChange}>
            <option value='Ordenar X Nombre'>Ordenar X Nombre</option>
            <option value='Ascendente'>Ascendente</option>
            <option value='Descendente'>Descendente</option>
        </select>
        </div>
        <div>
        <p>Ordenar X Poblacion</p>
        <select name='cantidad' onChange={handleChange}>
            <option value='Ordenar X Poblacion'>Ordenar X Poblacion</option>
            <option value='Ascendente'>Ascendente</option>
            <option value='Descendente'>Descendente</option>
        </select>
        </div>
    </div>
}