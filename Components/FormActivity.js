import React,{ useEffect }  from "react";
import {useDispatch, useSelector} from "react-redux"
import { useHistory } from "react-router-dom"
import { createActivity,setStatus } from "../Redux/actions";
import  '../Styles/FormActivity.css'

let boton
export function validate(input){
   
    let errors={};
    let expLetras=/^[A-Za-z]+[A-Za-z\s]*[A-Za-z]$/
    if(!input.name){
        errors.name='Nombre es requerido';
    }else if(!expLetras.test(input.name)){
        errors.name='Nombre es invalido'
    }
    if(input.season){
       
        if(input.season!=='Verano' && input.season!=='Otoño' && input.season!=='Invierno' && input.season!=='Primavera'){
            errors.season='Temporada Invalida'
        }
    }
    if(input.duration){
        if(input.duration<1 || input.duration>24 || /\D/.test(input.duration)){
            errors.duration="Duracion no valida"
        }
    }
    if(input.difficulty){
        if(input.difficulty<1 || input.difficulty>5 || /\D/.test(input.difficulty)){
            errors.difficulty="Dificultad debe estar en el rango de 1 a 5"
        }
    }
    if(errors.hasOwnProperty('name')||errors.hasOwnProperty('difficulty')||errors.hasOwnProperty('season')||errors.hasOwnProperty('duration')){
        console.log(boton)
        boton.className='boton_disabled'
    }
    else{
        boton.className='boton_form'
    }
   
return errors;
}

export default function FormActivity(){
    const dispatch=useDispatch()
    const history=useHistory()

    function handleClick(e){
        history.goBack()
    }
  
    useEffect(()=>{
       boton= document.getElementById('enviar')
       boton.disabled=true   
       boton.className='boton_disabled'         
     },[]) 
     let loading=useSelector(state=>state.loading)
     let countries=useSelector(state=>state.countries)
     countries=countries.sort((a,b)=>{
        if(a.name>b.name)return 1
        else if(a.name<b.name) return -1
        else return 0
     })
    
     const [input,setInput]=React.useState({
         name:'',
         difficulty:'',
         duration:0,
         season:'',
         countries:[]
     })
     const [errors,setErrors]=React.useState({});
      
     function handleSubmit(e){

         e.preventDefault()
         dispatch(createActivity(input))
         setInput({
            name:'',
            difficulty:'',
            duration:0,
            season:'',
            countries:[]
        })
        e.target.name.focus()
        let boton= document.getElementById('enviar')
        boton.disabled=true   
        setTimeout(()=>dispatch(setStatus('')),2000)
     }
    
     function handleChange(e) {
        setInput({
         ...input,
         [e.target.name]:e.target.value
        })   
        setErrors(validate({
         ...input,[e.target.name]:e.target.value
       }))     
     }
     function handleSelect(e){
                if(input.countries.includes(e.target.value)){
                    setInput({
                        ...input,
                        countries:input.countries.filter((c)=>{
                           return c!==e.target.value
                    })
                })
                }else{
                    setInput({
                        ...input,
                        countries:input.countries.concat(e.target.value)
                    })
                }
              
     }
    return <div>
        
        <form onSubmit={(e)=>handleSubmit(e)} className="form">
            <fieldset>
                <legend>Creacion de Actividades</legend>
                <label>Actividad: </label>
                <input type='text' className={errors.name?'danger':'input'} name='name' value={input.name} placeholder='Ingrese el nombre de la Actividad Turistica' onChange={(e)=>handleChange(e)} autoFocus /><br />
                {errors.name?<p>{errors.name}</p>:null}<br />
                <label>Dificultad: </label>
                <input type='number' min='1' max='5' className={errors.difficulty?'danger':'input'} name='difficulty' value={input.difficulty} placeholder='dificultad' onChange={(e)=>handleChange(e)} /><br />
                {errors.difficulty?<p>{errors.difficulty}</p>:null}<br />
                <label>Duracion: </label>
                <input type='text' className={errors.duration?'danger':'input'} name='duration' value={input.duration} placeholder='duracion' onChange={(e)=>handleChange(e)} /><br />
                {errors.duration?<p>{errors.duration}</p>:null}<br />
                <label>Temporada:</label>
                <select name="season" value={input.season} placeholder='temporada' onChange={handleChange} className={input.season?'danger':'input'}>
                    <option value=''>Seleccione</option>
                    <option value='Verano'>Verano</option>
                    <option value='Otoño'>Otoño</option>
                    <option value='Invierno'>Invierno</option>
                    <option value='Primavera'>Primavera</option>
                </select>
                {errors.season?<p>{errors.season}</p>:null}<br />
            </fieldset>
            <fieldset>
            <legend>Paises:</legend>
                    <select name="countries" value={input.countries} onClick={handleSelect} className="select" multiple>
                    {countries.map((c)=>{
                         return <option key={c.id} value={c.id}>{c.name} </option>
                       })
                    }
                </select>
            <br />
            {loading?<p>{loading}</p>:null}
           <input type='submit' className="boton_form" id='enviar' disabled={(errors.hasOwnProperty('name')||errors.hasOwnProperty('difficulty')||errors.hasOwnProperty('season')||errors.hasOwnProperty('duration'))? true:false} value='Enviar Datos' />
           <input type='button' className="boton_form" onClick={handleClick} value='Regresar' />
           </fieldset>
        </form>
       
    </div>
}