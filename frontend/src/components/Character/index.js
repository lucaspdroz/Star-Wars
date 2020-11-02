import Film from '../Film'
import './character.css'

export const Character = ({ character }) => {

    const { char_img, name, mass, homeworld, birth_year, films } = character

    return (
        <div>
            <img src={char_img} alt={name} />
            <p>Nome: {name}</p>
            <p>Mass: {mass}</p>
            <p>Homeworld: {homeworld}</p>
            <p>Birth year: {birth_year}</p>

            <div className="movie-wrapper">
                <div className="movie-card">
                    <Film films={films[0]} />
                </div>
                <div className="movie-card">
                    <Film films={films[1]} />
                </div>
                <div className="movie-card">
                    <Film films={films[2]} />
                </div>
                <div className="movie-card">
                    <Film films={films[3]} />
                </div>
                <div className="movie-card">
                    <Film films={films[4]} />
                </div>
            </div>
        </div>
    )
}
