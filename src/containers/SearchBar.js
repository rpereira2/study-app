import SearchBarView from '../components/SearchBarView'
import { connect } from 'react-redux'
import { getResultsFromApi } from '../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    results: state.sets.results
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getResultsFromApi: (data) => {
      return dispatch(getResultsFromApi(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarView)