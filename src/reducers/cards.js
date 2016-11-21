const initialState = {
    id: ' ',
    term: ' ',
    definition: ' '
    
}


const cards = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_TERM':
            return Object.assign({}, state, {
                term: action.term
            })        
        case 'SHOW_DEFINITION':
            return Object.assign ({}, state, {
                definition: action.definition
            })
            
        default:
      return state
  }
}

export default cards
    

    



