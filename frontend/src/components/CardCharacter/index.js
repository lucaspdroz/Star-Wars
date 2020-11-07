import { useState, useCallback } from 'react'
import './character.scss'
import Film from '../Film'
import StatusSeparator from '../StatusSeparator'
import AtomCrawlText from '../AtomCrawlText'
import Modal from '../Modal'

export const CardCharacter = ({ character }) => {

    const { char_img, name, actor, mass, birth_year, height, films } = character

    const [hidden, setIsHidden] = useState(true);
    const [filmModal, setfilmModal] = useState({});

    const a = useCallback(
        (film) => {
            setIsHidden(false);
            setfilmModal(film)
        },
        []
    )

    return (
        <div className="card-character">
            <div className="bg-character" style={{ backgroundImage: `url(${char_img})` }}></div>
            <div className="char-fade"></div>
            <div className="character-stats">
                <h3 className="">{name}</h3>
                <h2 className="">{actor}</h2>
            </div>

            <StatusSeparator mass={mass} birth_year={birth_year} height={height} className="item-content" />

            <h3>Films</h3>
            {
                hidden ? null :
                    (
                        <Modal onClose={() => setIsHidden(true)}>
                            <AtomCrawlText title={filmModal.title} id_chapter={filmModal.id_chapter} crawl={filmModal.crawl} />
                        </Modal>
                    )
            }

            <div className="movie-wrapper">
                {
                    films.map((film, i) => {
                        return (
                            <div key={i} className="movie-card">
                                <Film film={film} onClick={() => a(film)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
