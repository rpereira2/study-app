const initialState = {
  sets: {},
 
}

const sets = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SETS':
      return Object.assign({}, state, { 
         title: action.title 
      })
    default:
      return state
  }
}

export default sets