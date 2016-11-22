import SearchBarView from '../components/SearchBarView'
import { connect } from 'react-redux'
import { getResultsFromApi } from '../actions'

const mapStateToProps = (state) => {
  return {
    results: state.searchResults.results
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getResultsFromApi: () => {
      return dispatch(getResultsFromApi())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarView)