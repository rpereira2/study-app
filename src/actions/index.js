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


// method: headers: and body: ??

export const getResultsFromApi = (data) => {
  return dispatch => {
    dispatch(requestData())
    return fetch(`https://localhost:8080/cards${data}`)
      .then(response => response.json())
      .then(results => dispatch(receiveData(results)))
  }

}
