import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Country from './Country.js'
import { setCurrent } from '../Redux/actions.js';
import '../Styles/Countries.css'

export default function Countries({countries}) {
    const dispatch=useDispatch()
    
    let currentPage=useSelector(state=>state.currentPage)
    let pags=Math.ceil((countries.length-9)/10)+1    
    let pag=currentPage===0?1:(currentPage+1)/10+1
    let paginas=[];
  
    for(let i=0;i<pags;i++)paginas[i]=i+1

     function paginacion(){
        
        if(pag>pags)dispatch(setCurrent(0))
            if(pag===1){
                return countries.slice(currentPage,currentPage+9)
            }else{
                return countries.slice(currentPage,currentPage+10)
            }        
    }

    function handledSumbit(e){        
        if(e.target.name==='next'){            
            if(pag>=pags){                 
            }
            else{
                nextPage()
            }
        }
        else if(e.target.name==='prev'){           
            if(pag<=1){               
            }
            else{
                prevPage()
                e.target.disabled=false
            }           
        }
        else{
            pagina(e.target.value)
        }
    }

    function nextPage(){
            
              if(pag===1){
                dispatch(setCurrent(currentPage+9))
              }else{
                dispatch(setCurrent(currentPage+10))
              }              
    }

    function prevPage(){
            if(pag===2){
                dispatch(setCurrent(0))
            }else{
                dispatch(setCurrent(currentPage-10))
            }            
    }

    function pagina(pag){
        
        if(parseInt(pag)===1){
            dispatch(setCurrent(0))
        }
        else{
            dispatch(setCurrent((pag-1)*10-1))
        }
    }

    return <div className='countries'>
        <div className='paginado'>
                <button name='prev' onClick={(e)=>handledSumbit(e)}>{`<<`}</button>
                {paginas.map((e,index)=>{
                    return <button key={index} name='pagina' onClick={(e)=>handledSumbit(e)} value={e}>{e}</button>
                })}
                <button name="next" onClick={(e)=>handledSumbit(e)}>{`>>`}</button>
                <label> Pagina {pag} de {pags}</label>
        </div>
        <div className='home'>
        {paginacion()?.map((c)=>{
            return <div key={c.id}><Country country={c} /></div>
            })
        }
        </div>
        
    </div>
}