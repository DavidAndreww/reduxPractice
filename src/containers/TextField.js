import { connect } from 'react-redux';
import TextField from '../components/TextField';
import {addToDo} from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (value) => dispatch(addToDo(value))
  }
}

export default connect(null, mapDispatchToProps)(TextField)