import { combineReducers } from 'redux'

const itemList = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [ ...state, action.value ]
    default: 
    return state
  }
}

const itemText = (state = '') => {
  return state
}

const itemId = (state = 0) => {
  return state
}

export default combineReducers({ itemList, itemText, itemId })