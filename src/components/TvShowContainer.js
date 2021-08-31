import React from 'react';

import TvShowCard from './TvShowCard';

export default function TvShowContainer({ tvShows }) {

    const displayTvShows =() => tvShows.map(tvShow => (
        <TvShowCard tvShow={tvShow} key={tvShow.id}/>
    ))


    return (
        <div className='tvshow-container'>
            {displayTvShows()}
        </div>
    )
}
