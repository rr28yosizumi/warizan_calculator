import React from 'react';
import PropTypes from 'prop-types';
import ClearImg from '../image/clearbtn.png'
import './NumCard.css';

const ClearBtn = ({onClick}) => (
    <img src={ClearImg} alt='clear' onClick={onClick} className='numcard_button'></img>
);

ClearBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ClearBtn;