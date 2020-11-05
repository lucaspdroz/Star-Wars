import { useState } from 'react'
import './character.scss'
import Film from '../Film'
import StatusSeparator from '../StatusSeparator'
import AtomSeparator from '../AtomSeparator'
import Modal from '../Modal'

export const CardCharacter = ({ character }) => {

    const [isVisible, setIsVisible] = useState(false);

    CardCharacter.defaultProps = {
        films: []
    }

    const { char_img, name, actor, mass, birth_year, height, films } = character

    function filmIsReady(movieData) {
        return movieData.map((film, i) => {
            return (
                <div key={i} className="movie-card">
                    <Film film={film} />
                </div>
            )
        })
    }

    return (
        <div className="card-character">
            <div className="bg-character" style={{ backgroundImage: `url(${char_img})` }}></div>
            <div className="fade"></div>
            <AtomSeparator text={name} />
            <AtomSeparator text={actor} />
            <StatusSeparator mass={mass} birth_year={birth_year} height={height} className="item-content" />
            <AtomSeparator text="filmes" />

            <button onClick={() => setIsVisible(true)}>Open modal</button>

            {
                isVisible ? <Modal><h1>Bla</h1></Modal> : null
            }

            <div className="movie-wrapper">
                {
                    films ? filmIsReady(films) : <p>Loading...</p>
                }
            </div>
            <AtomSeparator text="Outros Personagens" />
        </div>
    )
}
