import './character.scss'

import Film from '../Film'
import StatusSeparator from '../StatusSeparator'
import AtomSeparator from '../AtomSeparator'

export const CardCharacter = ({ character }) => {

    const { char_img, name, actor, mass, birth_year, height, films } = character

    return (
        <div className="card-character">
            <div className="bg-character" style={{ backgroundImage: `url(${char_img})` }}></div>
            <div className="fade"></div>
            <AtomSeparator text={name} />
            <AtomSeparator text={actor} />
            <StatusSeparator mass={mass} birth_year={birth_year} height={height} className="item-content" />

            <AtomSeparator text="filmes" />

            <div className="movie-wrapper">
                {
                    films.map(film => {
                        return (
                            <div className="movie-card">
                                <Film films={film} />
                            </div>
                        )
                    })
                }

            </div>
            <AtomSeparator text="Outros Personagens" />

        </div>
    )
}
