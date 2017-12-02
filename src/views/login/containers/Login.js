//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { submit } from '../state/action'


const mapStateToProps = (state) => {
  return {
    userName: state.login.userName,
    password: state.login.password,
    payload: state.login.payload
  }
}

const mapDispatchToProps = (dispatch) => ({
    fn: {
      onFetch: () => {
        dispatch(submit());
      }
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
