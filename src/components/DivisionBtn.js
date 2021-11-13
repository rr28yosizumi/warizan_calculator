import React from 'react';
import PropTypes from 'prop-types';
import divisionbtn from '../image/divisionbtn.png';
import './NumCard.css';

const DivisionBtn = ({onClick}) => (
    <img src={divisionbtn} onClick={onClick} alt='division' className='numcard_button'></img>
);

DivisionBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default DivisionBtn;