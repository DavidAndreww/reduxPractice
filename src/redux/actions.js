const addToDo = (value) => {
  return {
    type: 'ADD_TODO',
    value: value
  }
}

export { addToDo }