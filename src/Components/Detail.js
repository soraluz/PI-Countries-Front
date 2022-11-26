import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getDetailCountry } from '../Redux/actions.js'
import '../Styles/Detail.css'

export default function Detail(){
    const {id}=useParams()
    const history=useHistory()
    const dispatch=useDispatch()

    useEffect(()=>{
       dispatch(getDetailCountry(id))
    },[])

    const country=useSelector((state)=>state.detail)

    function handleClick(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        history.goBack()
    }

    return <div className="detail">
                
                <h2>{country.name}</h2>
                <img src={country.flag} alt='Imagen del Pais' />
                <p>Codigo: {country.id}</p>
                <p>Continente: {country.continent}</p>
                <p>Capital: {country.capital}</p>
                <p>Subregion: {country.subregion}</p>
                <p>Area:{new Intl.NumberFormat().format(country.area)} Km2</p>
                <p>Poblacion: {new Intl.NumberFormat().format(country.population)}</p>
                <br />
                <h3>Actividades Turisticas</h3>
                <ol>{country.touristActivities?.map((c)=>{
                        return(
                           <li key={c.id}>
                                <h3>{c.name}</h3>
                                <p>Dificultad:{c.difficulty}</p>
                                <p>Duracion:{c.duration}</p>
                                <p>Temporada:{c.season}</p>
                                <br />
                            </li>      
                          )
                        
                    })
                }</ol>
   
        <button onClick={handleClick}>Regresar</button>
    </div>
}