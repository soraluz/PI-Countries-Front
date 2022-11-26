import { useState } from "react"
import {getSearch} from '../Redux/actions'
import { useDispatch } from "react-redux"
import '../Styles/Buscar.css'

export default function Buscar(){
    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    function handleChange(e){
        setInput(e.target.value)
        dispatch(getSearch(e.target.value))
    }
        return <div className="buscar">
        <label>Buscar X Nombre:</label>
        <input type='search' value={input} name='name' onChange={handleChange}/>
    </div>
}