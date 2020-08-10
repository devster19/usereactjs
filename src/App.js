import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import SongList from './components/SongList'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SongList />
    </div>
  );
}

export default App;
