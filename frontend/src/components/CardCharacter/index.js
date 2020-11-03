import Film from '../Film'
import StatusSeparator from '../StatusSeparator'
import AtomSeparator from '../AtomSeparator'
import './character.scss'

export const CardCharacter = ({ character }) => {

    const { char_img, name, actor, mass, homeworld, birth_year, height, films } = character

    return (
        <div className="card-character">
            
            <div className="bg-character" style={{ backgroundImage: `url(${char_img})` }}></div>
            <div className="fade"></div>
            <AtomSeparator text={name} />
            <AtomSeparator text={actor} />
            <StatusSeparator mass={mass} birth_year={birth_year} height={height} className="item-content" />
            {/* <p>Homeworld: {homeworld}</p> */}

            {/* <div className="movie-wrapper">
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
            </div> */}
        </div >
    )
}
