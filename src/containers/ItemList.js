import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

const mapStateToProps = (state) => {
  return {
    itemList: state.itemList,
    itemText: state.itemText,
    itemId: state.itemId
  }
}

export default connect(mapStateToProps)(ItemList)