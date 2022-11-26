const InitialState={
    countries:[],
    activities:[],
    filtro:[],
    ordenar:[],
    detail:{},
    currentPage:0,
    loading:''
}
export default function reducer(state=InitialState,action){
    
        switch(action.type){
            case 'GET_COUNTRIES':
                return{
                    ...state,
                    countries:action.payload,
                    detail:{},
                    loading:''
                }

            case 'GET_DETAIL_COUNTRY':
                return{
                    ...state,
                    detail:action.payload,
                    loading:''
                }

            case 'GET_ACTIVITIES':
                return{
                    ...state,
                    activities:action.payload
                }

            case 'GET_SEARCH':
                if(typeof action.payload==='string'){
                    return{
                        ...state,
                        loading:action.payload
                    }
                }else{
                    return{
                        ...state,
                        filtro:action.payload,
                        loading:'',
                        ordenar:[]
                    }
                }
                
            case 'GET_FILTER_CONTINENT':
                if(action.payload==='All'){
                    return{
                        ...state,
                        filtro:[...state.countries],
                        ordenar:[],
                        loading:''
                    }
                }
                else{
                    return{
                        ...state,
                        filtro:state.countries.filter((c)=>{
                        return c.continent===action.payload
                    }),
                        ordenar:[],
                        loading:''
                }                
            }

            case 'GET_FILTER_ACTIVITY':
                
                if(action.payload==='All'){
                    return{
                        ...state,
                        filtro:[...state.countries],
                        ordenar:[],
                        loading:''
                    }
                }
                else{
                    return{
                        ...state,
                        filtro:action.payload,
                        ordenar:[],
                        loading:''
                }                
            }

            case 'SET_CURRENT':
                return{
                    ...state,
                    currentPage:action.payload
                }

            case 'SET_STATUS':
                    return{
                        ...state,
                        loading:action.payload
                    }   

            case 'SORT_COUNTRIES_ASC':
                let sortAsc=state.filtro.length?[...state.filtro]:[...state.countries]
                if(action.payload==='nombre'){
                    return{
                        ...state,
                        ordenar:sortAsc.sort((a,b)=>{
                            if (a.name.toUpperCase() < b.name.toUpperCase()) {
                                return -1;
                              }
                              if (a.name.toUpperCase() > b.name.toUpperCase()) {
                                return 1;
                              }
                              // a must be equal to b
                              return 0;
                        })
                    }
                }
                else{
                    return{
                        ...state,
                        ordenar:sortAsc.sort((a,b)=>{
                            if (a.population < b.population) {
                                return -1;
                              }
                              if (a.population > b.population) {
                                return 1;
                              }
                              // a must be equal to b
                              return 0;
                        })
                    }
                }
                
            case 'SORT_COUNTRIES_DESC':
                    
                let sortDesc=state.filtro.length?[...state.filtro]:[...state.countries]
                if(action.payload==='nombre'){
                    return{
                        ...state,
                        ordenar:sortDesc.sort((a,b)=>{
                            if (a.name.toUpperCase() > b.name.toUpperCase()) {
                                return -1;
                              }
                              if (a.name.toUpperCase() < b.name.toUpperCase()) {
                                return 1;
                              }
                              // a must be equal to b
                              return 0;
                            })
                        }
                    }
                else{
                    return{
                        ...state,
                        ordenar:sortDesc.sort((a,b)=>{
                            if (a.population > b.population) {
                                return -1;
                                }
                            if (a.population < b.population) {
                                return 1;
                                }
                                  // a must be equal to b
                               return 0;
                            })
                        }
                    }
            
            default:return state
        }

}