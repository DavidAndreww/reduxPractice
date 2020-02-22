import React from 'react';
import Header from './components/Header'
import TextField from './components/TextField';
import ItemList from './components/ItemList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <TextField />
      <ItemList />
    </div>
  );
}

export default App;
