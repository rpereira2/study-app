import { connect } from 'react-redux'
import LoaderView from '../components/LoaderView'

const mapStateToProps = (state) => {
  return {
    isLoading: state.results.isloading
  }
}

export default connect(mapStateToProps)(LoaderView)