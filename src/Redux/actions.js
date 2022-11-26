
import axios from 'axios'
const servidor='https://pi-countries-back-production-cbec.up.railway.app'

export function getCountries(){
    
    return function(dispatch){
        dispatch(setStatus('...Cargando'))
        axios.get(`${servidor}/countries`)
        .then(r=>r.data)
        .then(data=>dispatch({
            type:'GET_COUNTRIES',
            payload:data
        }           
        ))
        .catch(e=>dispatch(setStatus('error al devolver los datos de la API')))
    }    
}

export function getDetailCountry(id){
   
    return function(dispatch){
        dispatch(setStatus('...Cargando'))
        axios.get(`${servidor}/countries/${id}`)
        .then(r=>r.data)
        .then(data=>dispatch({
            type:'GET_DETAIL_COUNTRY',
            payload:data
        }           
        ))
        .catch(e=>dispatch(setStatus('error al devolver los datos de la API')))
    }
}

export function getActivities(){
    return function(dispatch){
        axios.get(`${servidor}/activities`)
        .then(r=>r.data)
        .then(data=>dispatch({
            type:'GET_ACTIVITIES',
            payload:data
        }           
        ))
        .catch(e=>dispatch(setStatus('error al devolver los datos de la API')))
    }   
}

export function getSearch(name){
    return function(dispatch){
        dispatch(setStatus('...Cargando'))
        axios.get(`${servidor}/countries?name=${name}`)
        .then(r=>r.data)
        .then(data=>dispatch({
            type:'GET_SEARCH',
            payload:data
        }           
        ))
        .catch(e=>dispatch(setStatus('error al devolver los datos de la API')))
    }    
}

export function getFilterContinent(continent){
  
    return {
        
            type:'GET_FILTER_CONTINENT',
            payload:continent
           }  
}

export function getFilterActivity(activity){

    return function(dispatch){
        dispatch(setStatus('...Cargando'))
        if(activity!=='All'){
            axios.get(`${servidor}/countries?activity=${activity}`)
        .then(r=>r.data)
        .then(data=>dispatch({
            type:'GET_FILTER_ACTIVITY',
            payload:data
        }           
        ))
        .catch(e=>dispatch(setStatus('error al devolver los datos de la API')))
        }
        else{
            dispatch({
                type:'GET_FILTER_ACTIVITY',
                payload:activity
            })
        }
    }    
}

export function createActivity(activity){
    return function(dispatch){
        axios.post(`${servidor}/activities`,activity)
        .then(r=>r.data)
        .then(r=>dispatch(setStatus('Datos creados correctamente')))
        .catch(e=>dispatch(setStatus('Error en alguno de los datos')))
    }

}
export function sortCountriesAsc(campo){
    return{
        type:'SORT_COUNTRIES_ASC',
        payload:campo
    }
}

export function sortCountriesDesc(campo){
    return{
        type:'SORT_COUNTRIES_DESC',
        payload:campo
    }
}

export function setCurrent(current){
    return{
        type:'SET_CURRENT',
        payload:current
    }
}

export function setStatus(payload){
    
    return {
        type: 'SET_STATUS',
        payload:payload
    }
}