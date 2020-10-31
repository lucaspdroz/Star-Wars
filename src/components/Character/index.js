import React from 'react'

export const Character = ({ character }) => {

    const { name, mass, homeworld, birth_year, films } = character

    return (
        <div>
            <p>Nome: {name}</p>
            <p>Mass: {mass}</p>
            <p>Homeworld: {homeworld}</p>
            <p>Birth year: {birth_year}</p>
            <p>Films: {films}</p>
        </div>
    )
}
