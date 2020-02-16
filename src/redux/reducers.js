import { combineReducers } from 'redux'

const itemList = (state = [], actions) => {
  switch(actions.type){
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