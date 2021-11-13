import React from 'react';
import PropTypes from 'prop-types';
import undobtn from '../image/undobtn.png';
import './NumCard.css';

const UndoBtn = ({onClick}) => (
    <img src={undobtn} onClick={onClick} alt='undo' className='numcard_button'></img>
);

UndoBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default UndoBtn;