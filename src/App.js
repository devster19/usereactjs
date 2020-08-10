import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import SongList from './components/SongList'

function App() {
  const songs = [
    { title:'Cardigan', artist: 'Taylor Swift' },
    { title:'Sour Candy', artist: 'Lady Gaga, BLACKPINK' },
    { title:'Death bed', artist: 'Powfu, Beabadoobee' },
    { title:'Yummy', artist: 'Justin Bieber' },
    { title:'One of Us', artist: 'FLYNN' },
  ]
  return (
    <div className="App">
      <Navbar />
      <SongList  charts={songs} />
    </div>
  );
}

export default App;
