import React from 'react'

export default function TvShowCard({ tvShow }) {

    const displayGenre = () => tvShow.genres.map(genre => (
        <li>{genre}</li>
    ))

    return (
        <div>
            <h1>{tvShow.name}</h1>
            <img src={tvShow.image.medium} alt={tvShow.id}/>
            <h2>{displayGenre()}</h2>
        </div>
    )
}
