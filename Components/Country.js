import {NavLink} from 'react-router-dom'
import '../Styles/Country.css'

export default function Country({country}) {
    
    return <div className="pais"><NavLink to={`/Detail/${country.id}`}>
            <div className="country">
                <h2>{country.name}</h2>
                <img src={country.flag} alt='Imagen del Pais' />
                <p>{country.continent}</p>
                <p>{new Intl.NumberFormat().format(country.population)}</p>
            </div>
            </NavLink>
        </div>
}