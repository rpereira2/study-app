const initialState = {
  title: [],
  results: [],
  loading: false
 
}

const sets = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_SPINNER':
      return Object.assign ({}, state, { loading: true })
    case 'GET_SETS':
      return Object.assign({}, state, { 
         title: action.title }) 
    case 'REQUEST_DATA':
      return Object.assign({}, state, { loading: true })
    case 'RECEIVE_DATA':
      return Object.assign({}, state, {
        loading: false,
        results: action.results
      })

    default:
      return state
  }
}





export default sets

