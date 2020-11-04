import './style.scss';

import AtomFilm from '../AtomFilm'
import crawlSvg from '../../assets/crawl.svg'

export default function Film({ films }) {

    const { cover, id_chapter, title, music, cralw } = films

    return (
        <div className="film">
            <div>
                <img className="banner" src={cover} alt={title} />
                <AtomFilm svg={crawlSvg} />
            </div>
            <h3 className="idChapter">{id_chapter}</h3>
            <h2 className="title">{title}</h2>

            {/* Deprecated tests */}
            {/* <div className="my-cover" style={{ backgroundImage: `url(${cover})` }}></div> // For a  better acessibility*/}
            <p>{cralw}</p>
            {/* <audio src={music} controls /> */}
        </div>
    )
}

