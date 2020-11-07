import './style.scss';

const Button = ({ svg, onClick }) => {
    return (
        <>
            <button className="button" onClick={onClick}>
                <img className="btn-svg" src={svg} alt="" />
            </button>
        </>
    );
}

export default Button;
