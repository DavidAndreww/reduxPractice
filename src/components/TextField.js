import React from 'react';

class TextField extends React.Component {
  state = {
    itemText: '',
    itemId: 0
  }

  handleInputChange = (e) => {
    this.setState({itemText: e.target.value})
  }

  render(){
    return (
      <div>
        <input type = "text" placeholder="whaddya gotta do?" value={this.state.itemText} onChange={this.handleInputChange}/>
        <button onClick={() => this.props.addToDo(this.state.itemText)}>Add Item</button>
      </div>
    )
  }
} 

export default TextField