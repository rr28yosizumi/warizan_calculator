import React from 'react';
import PropTypes from 'prop-types';
import plusbtn from '../image/plusbtn.png'
import './NumCard.css';

const PlusBtn = ({onClick}) => (
    <img src={plusbtn} onClick={onClick} alt='plus' className='numcard_button'></img>
);

PlusBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default PlusBtn;
