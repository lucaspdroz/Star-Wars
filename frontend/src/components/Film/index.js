import './style.scss';

export default function Film({ films }) {

    const { cover, id_chapter, title, music } = films

    return (
        <div className="film">
            <img src={cover} alt={title} />
            <h3 className="idChapter">{id_chapter}</h3>
            <h2 className="">{title}</h2>
            {/* Deprecated tests */}
            {/* <div className="my-cover" style={{ backgroundImage: `url(${cover})` }}></div> // For a  better acessibility*/}
            {/* <audio src={music} controls /> */}
        </div>
    )
}

