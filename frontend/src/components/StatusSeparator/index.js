import './style.scss';
import AtomSeparator from '../AtomSeparator'

export default function StatusSeparator({ mass, birth_year, height }) {
    return (
        <div className="separator">
            <div className="item">
                <AtomSeparator text="peso" />
                <AtomSeparator text={mass} />
            </div>
            <div className="item">
                <AtomSeparator text="altura" />
                <AtomSeparator text={height} />
            </div>
            <div className="item">
                <AtomSeparator text="nascimento" />
                <AtomSeparator text={birth_year} />
            </div>
        </div>
    )
}
