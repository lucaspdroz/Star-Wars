import './film.css';

export default function Film({ films }) {

    const { cover, id_chapter, title, music } = films

    return (
        <div className="film">
            <div className="my-cover" style={{ backgroundImage: `url(${cover})` }}></div>
            <h3 className="idChapter">{id_chapter}</h3>
            <h2 className="">{title}</h2>
            {/* Deprecated tests */}
            {/* <img src={cover} alt={title} />  // For a  better acessibility*/}
            {/* <audio src={music} controls /> */}
        </div>
    )
}

