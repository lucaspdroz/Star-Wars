export default function Film({ films }) {
    
    const { cover, id_chaper, title } = films

    return (
        <div>
            <h3>{id_chaper}</h3>
            <h2>{title}</h2>
            <img src={cover} alt={title} />
        </div>
    )
}
