import React from 'react';
import plusbtn from '../image/plusbtn.png';
import './NumCard.css';

export default function InputNumber({onClick}) {
    const [inputValue,setInputValue] = React.useState(0);
    const [enablePlus,setEnablePlus] = React.useState(false);
    const handleUpdate = (e) => {
        setInputValue(() => e.target.value);
        var isinit = Number.isInteger(parseInt(e.target.value))
        var v = parseInt(e.target.value);
        var result = isinit && v <= 100 && v >= 0;
        setEnablePlus(() => result); 
    };
    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleUpdate} ></input>
            </div>
            <div>
                { enablePlus && 
                    <img className='numcard_button' src={plusbtn} alt='num btn' onClick={()=>{
                    if (Number.isInteger(parseInt(inputValue)))
                        onClick(parseInt(inputValue));
                    }} visible={enablePlus}></img>
                }
            </div>
        </div>
    );
}