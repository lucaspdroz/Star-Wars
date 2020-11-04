import './style.scss';

import AtomFilm from '../AtomFilm'
import crawlSvg from '../../assets/crawl.svg'

export default function Film({ film }) {

    const { title, cover, id_chapter, cralw } = film

    return (
        <div className="film">
            <div>
                <img className="banner" src={cover} alt={title} />
                <AtomFilm svg={crawlSvg} />
            </div>
            <h3 className="idChapter">{id_chapter}</h3>
            <h2 className="title">{title}</h2>
            <p>{cralw}</p>
        </div>
    )
}

