import Film, { useEffect } from '../Film'

export const Character = ({ character }) => {

    const { char_img, name, mass, homeworld, birth_year, films } = character

    return (
        <div>
            <img src={char_img} alt={name} />
            <p>Nome: {name}</p>
            <p>Mass: {mass}</p>
            <p>Homeworld: {homeworld}</p>
            <p>Birth year: {birth_year}</p>

            <Film films={films[0]} />
        </div>
    )
}
