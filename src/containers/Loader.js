import { connect } from 'react-redux'
import LoaderView from '../components/LoaderView'





const mapStateToProps = (state) => {
  console.log(state)
  
  return {
    loading: state.cards.loading,
    
    
   

  }

}

export default connect(mapStateToProps)(LoaderView)
