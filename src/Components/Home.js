import { useDispatch, useSelector} from 'react-redux'
import {getCountries} from '../Redux/actions.js'
import { useEffect } from 'react'
import Countries from './Countries.js'
import Nav from './Nav.js'
import '../Styles/Home.css'

export default function Home(){
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    
    const countries=useSelector(state=>state.countries)
    const filtro=useSelector(state=>state.filtro)
    const ordenar=useSelector(state=>state.ordenar)
    const loading=useSelector(state=>state.loading)  
 
    return <div className='home'>
        <Nav />
        {loading ? <span id="loading">{loading}</span>:null}
        {ordenar.length?<Countries countries={ordenar} />
        :filtro.length?<Countries countries={filtro} />
        :<Countries countries={countries} />}                
    </div>
}