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

/*export const getSets = (title) => {
  return {
    type: 'GET_SETS',
    title
  }
}*/

export const showCard = () => {
  return {
    type: 'SHOW_CARD',

  }
}




export const getResultsFromApi = () => {
  return dispatch => {
    dispatch(requestData())
    return fetch(`https://tranquil-savannah-77989.herokuapp.com/cards`)
      .then(response => response.json())
      .then(results => dispatch(receiveData(results)))
  }

}
