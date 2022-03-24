import p from 'prop-types'
import './styles.css';
export const Button = ({ children, buttonClick, estilo }) => {
    return (
        <button className={estilo}  onClick={buttonClick} >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: p.node.isRequired,
    buttonClick: p.func.isRequired
}