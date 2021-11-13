import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (number) => ({
    type:actionTypes.INPUT_NUMBER,
    number,
});
export const onPlusClick = () =>({
    type:actionTypes.PLUS,
});

export const onDivisionClick = () =>({
    type:actionTypes.DIVISION,
});

export const onClearClick = () =>({
    type:actionTypes.CLEAR,
});

export const onUndoClick = () => ({
    type:actionTypes.UNDO,
});

export const onAllNumClick = (number)=>({
    type:actionTypes.ALL_NUMBER,
    number,
})
export const onInputNumClick = (number) =>({
    type:actionTypes.PLUS_ANYNUMBER,
    number,
})
export const onModalClose = ()=>({
    type:actionTypes.MODALCLOSE
})