import { React } from 'react';

// Styles
import './Button-styles.css';

const Button = ({text = 'Default', variant = 'contained'}) => {
    return (
        <button className={'button ' + variant}>
            {text}
        </button>
    )

}

export default Button;