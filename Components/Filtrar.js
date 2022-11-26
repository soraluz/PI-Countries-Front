import { useEffect } from 'react'
import { getFilterContinent, getFilterActivity, getActivities, setCurrent } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import '../Styles/Filtrar.css'

export default function Filtrar() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    const activities = useSelector(state => state.activities)

    function handleChange(e) {
        if (e.target.name === 'continent') {
            dispatch(getFilterContinent(e.target.value))
            dispatch(setCurrent(0))
            console.log(e.target)
        }
        else if (e.target.name === 'activity') {
            dispatch(getFilterActivity(e.target.value))
            dispatch(setCurrent(0))
            console.log(e.target)
        }
    }

    return <div className="filtrado">
        <div className='filtros'>
            <label>Filtrado X Continente:</label>
            <select onChange={handleChange} name='continent'>
                <option value='All'>All</option>
                <option value='Asia'>Asia</option>
                <option value='South America'>South America</option>
                <option value='North America'>North America</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctica'>Antarctica</option>
                <option value='Africa'>Africa</option>
                <option value='Europe'>Europe</option>
            </select>
        </div>
        <div className='filtros'>
            <label>Filtrado X Actividades:</label>
            <select onChange={handleChange} name='activity'>
                <option value='All'>All</option>
                {activities?.map((a) => {
                    return <option key={a.id} value={a.name}>{a.name}</option>
                })}
            </select>
        </div>
    </div>
}