import React, { useState } from 'react';

import TvShowCard from './TvShowCard';

export default function TvShowContainer({ tvShows }) {

    const [count, setCount] = useState(0)

    const displayTvShows =() => tvShows.map(tvShow => (
        <TvShowCard tvShow={tvShow} key={tvShow.id}/>
    ))

    const updateCount = () => {
        setCount(count + 1)
    } 


    return (
        <div className='tvshow-container'>
            <div className='button'>
                <button className='button' onClick={updateCount}>Press Me Too!</button>
                {count}
            </div>
            {displayTvShows()}
        </div>
    )
}
