import SearchBarView from '../components/SearchBarView'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    results: state.searchResults.results
  }
}

export default connect(mapStateToProps)(SearchBarView)