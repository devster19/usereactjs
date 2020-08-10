import React from "react";


const SongList = props => {
    return (
        <div className="song-content">
            <ul className="chart-list">
            {
                props.charts.map(song => (<li key={song.title}><span>{song.title}</span><span>{song.artist}</span></li>))
            }
            </ul>  
        </div>
        
    )
}
export default SongList;

