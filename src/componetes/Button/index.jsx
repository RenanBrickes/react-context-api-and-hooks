import p from 'prop-types'

export const Button = ({ children, buttonClick }) => {
    return (
        <button onClick={buttonClick} >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: p.node.isRequired,
    buttonClick: p.func.isRequired
}