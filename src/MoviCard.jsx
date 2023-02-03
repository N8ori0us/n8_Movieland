import React from 'react'

const MoviCard = ({movi}) => {
  return (
    <div className="movie">
    <div>
      <p>{movi.Year}</p>
    </div>
    <div>
      <img
        src={
          movi.Poster !== "N/A"
            ? movi.Poster
            : "https://via.placeholder.com/400"
        }
        alt='"https://via.placeholder.com/400"'
      />
    </div>
    <div>
      <span>{movi.Type}</span>
      <h3>{movi.Title}</h3>
    </div>
  </div>
  )
}

export default MoviCard