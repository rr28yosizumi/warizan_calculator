import React from 'react';
import BackGround from '../image/wari_ba.png';
import './Result.css';
const Result = ({ result }) => (
    <div className='banokazu'>
        <img src={BackGround} alt='ba'></img>
        <p>{result===1 ? '一閃' : result }</p>
    </div>
);

export default Result;
