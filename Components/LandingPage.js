import Logo from '../countries.png'
import { useHistory } from 'react-router-dom'
import '../Styles/LandingPage.css'

export default function LandingPage(){

let history=useHistory()

function handleClick(e){
    
    history.push('/Home')
}
    return <div className='inicio'>
        <p align="center">
        <img height="400" src={Logo} alt='Imagen de fondo' />
        </p>
       <button onClick={handleClick}>Ingesar</button>
    </div>
}