const initialState = {
      loading: false,
      isFlipped: false,
      results: []
};


const cards = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD-SPINNER':
          return Object.assign ({}, state, {
            loading: true,
          })
        case 'SHOW_CARD':
            return Object.assign({}, state, {
                loading: false,
                isFlipped: !state.isFlipped
            })
            case 'RECEIVE_DATA':
              return Object.assign({}, state, {
                loading: false,
                results: action.results
              })

              default:
      return state
  }
}

export default cards
