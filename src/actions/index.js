import fetch from 'isomorphic-fetch'

const requestData = () => {
  return {
    type: 'REQUEST_DATA'
  }
}

const receiveData = (results) => {
  return {
    type: 'RECEIVE_DATA',
    results,
    
  }
}

export const getSets = (title) => {
  return {
    type: 'GET_SETS',
    title
  }
}

export const showCard = (card) => {
  return {
    type: 'SHOW_CARD',
    card
  }
}


const showTerm = (term) => {
    return {
    type: 'SHOW_TERM',
    term
    }
}

const showDefinition = (definition) => {
    return {
    type: 'SHOW_DEFINITION',
    definition
    }
}

export const getResultsFromApi = (data) => {
  return dispatch => {
    dispatch(requestData())
    return fetch(`https://api.quizlet.com/2.0/search/sets?client_id=tSY7EmRENd&q=${data}`)
      .then(response => response.json())
      
      .then(results => dispatch(receiveData(results.sets)))
  }

}

