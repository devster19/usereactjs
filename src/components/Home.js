import React from "react";
import SongList from './SongList'


const Home = () => {
    const songs = [
        { title:'Cardigan', artist: 'Taylor Swift' },
        { title:'Sour Candy', artist: 'Lady Gaga, BLACKPINK' },
        { title:'Death bed', artist: 'Powfu, Beabadoobee' },
        { title:'Yummy', artist: 'Justin Bieber' },
        { title:'One of Us', artist: 'FLYNN' }
    ]
    return (
        <SongList  charts={songs} />
    )
}
export default Home;