import './style.scss'

const Button = ({ text, svg }) => {
    return (
        <>
            <button className="button">
                <img className="btn-svg" src={svg} alt="" />
            </button>
        </>
    );
}

export default Button;
