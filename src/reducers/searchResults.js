const initialState = {
  results: {},
  loading: false
}

const results = (state = initialState, action) => {
  switch (action.type) {
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

export default results