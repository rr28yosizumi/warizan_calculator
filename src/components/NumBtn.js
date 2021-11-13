import React from 'react';
import NumCard from './NumCard';
import './NumBtn.css';

const NumBtn = ({n,onClick,result}) => (
    <div>
        <NumCard onClick={onClick} n={n} result={result}/>
        {(result % n === 0 && n !== 1 && n !== -1 && n!==100) && <div className='components-division'><p>割斬可</p></div>}
    </div>
)

export default NumBtn;
