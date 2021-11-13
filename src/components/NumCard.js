import React from 'react';
import PropTypes from 'prop-types';
import img_wari02 from '../image/wari02.png';
import img_wari03 from '../image/wari03.png';
import img_wari05 from '../image/wari05.png';
import img_wari07 from '../image/wari07.png';
import img_wari11 from '../image/wari11.png';
import img_warip1 from '../image/warip1.png';
import img_warim1 from '../image/warim1.png';
import img_wari100 from '../image/wari100.png';
import './NumCard.css';

function selectImage(n){
    var img = img_wari02;
    switch(n){
        case 2:
            img = img_wari02;
            break;
        case 3:
            img = img_wari03;
            break;
        case 5:
            img = img_wari05;
            break;
        case 7:
            img = img_wari07;
            break;
        case 11:
            img = img_wari11;
            break;
        case 1:
            img = img_warip1;
            break;
        case -1:
            img = img_warim1;
            break;
        case 100:
            img = img_wari100;
            break;
        default:
            img = img_wari02;
    }
    return img;
}
const NumCard = ({n,onClick,result}) => (
    <img src={selectImage(n)} onClick={onClick} alt={n} className='numcard_button'></img>
)
NumCard.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default NumCard;