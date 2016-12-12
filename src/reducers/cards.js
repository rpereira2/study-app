const initialState = {
      isFlipped: false
};


const cards = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_CARD':
            return Object.assign({}, state, {
                isFlipped: !state.isFlipped
            })

        default:
      return state
  }
}

export default cards
