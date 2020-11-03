import './style.scss';
import AtomSeparator from '../AtomSeparator'

export default function StatusSeparator({ mass, birth_year, height }) {
    return (
        <div className="separator">
            <div>
                <AtomSeparator text="peso" />
                <AtomSeparator text={mass} />
            </div>
            <div className="middle">
                <div>
                    <AtomSeparator text="Altura" />
                    <AtomSeparator text={height} />
                </div>
            </div>
            <div>
                <AtomSeparator text="Birth year" />
                <AtomSeparator text={birth_year} />
            </div>
        </div>
    )
}
