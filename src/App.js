import React from 'react';
import Header from './components/Header'
import TextField from './components/TextField';
import BeerList from './components/BeerList';

const App = () => {
  return (
    <div className="App">
      <Header />
      <TextField />
      <BeerList />
    </div>
  );
}

export default App;
