import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
    inputValue:0,
    resultValue:100,
    showingResult: false,
    enablePlus:false,
    enableDivision:false,
    enableInput:false,
    modalIsOpen:false,
    calcList:[]
};

function calc_list(clist){
    var value=100;
    for(let element of clist){
        if (element.operator === '+'){
            value += element.value;
        }
        else if(element.operator === '/'){
            value /= element.value;
        }
        else{
        }
    }
    return value;
}

const calculator = (state = initialAppState, action) => {
    if (action.type === actionTypes.INPUT_NUMBER){
        return {
            ...state,
            inputValue: action.number,
            showingResult: false,
            enablePlus:((state.resultValue + action.number) > 0),
            enableDivision:(state.resultValue % action.number) === 0 && action.number !== 1 && action.number !== -1,
            modalIsOpen:true,
        };
    }else if ( action.type === actionTypes.ALL_NUMBER){
        return {
            ...state,
            inputValue: action.number,
            showingResult: false,
            enablePlus:false,
            enableDivision:false,
            modalIsOpen:true,
            enableInput:true,
        };
    }else if ( action.type === actionTypes.PLUS){
        state.calcList.push({
            operator:'+',
            value:state.inputValue,
        });

        return {
            ...state,
            inputValue: 0,
            resultValue:calc_list(state.calcList),
            showingResult: true,
            enablePlus:false,
            enableDivision:false,
            modalIsOpen:false,
            enableInput:false,
        };
    }else if ( action.type === actionTypes.PLUS_ANYNUMBER){
        state.calcList.push({
            operator:'+',
            value:action.number,
        });

        return {
            ...state,
            inputValue: 0,
            resultValue:calc_list(state.calcList),
            showingResult: true,
            enablePlus:false,
            enableDivision:false,
            modalIsOpen:false,
            enableInput:false,
        };
    }else if ( action.type === actionTypes.DIVISION && state.inputValue !== 0){
        state.calcList.push({
            operator:'/',
            value:state.inputValue,
        });

        return {
            ...state,
            inputValue: 0,
            resultValue:calc_list(state.calcList),
            showingResult: true,
            enablePlus:false,
            enableDivision:false,
            modalIsOpen:false,
            enableInput:false,
        }
    }else if (action.type === actionTypes.CLEAR ){
        state.calcList = []
        return {
            ...state,
            inputValue: 0,
            resultValue: 100,
            showingResult: true,
            enablePlus:false,
            enableDivision:false,
            modalIsOpen:false,
            enableInput:false,
        }
    }else if (action.type === actionTypes.UNDO ){
        state.calcList.pop();
        return {
            ...state,
            inputValue: 0,
            resultValue: calc_list(state.calcList),
            showingResult: true,
            enablePlus:false,
            enableDivision:false,
            modalIsOpen:false,
            enableInput:false,
        }
    }else if (action.type === actionTypes.MODALCLOSE ){
        return {
            ...state,
            inputValue: 0,
            resultValue: calc_list(state.calcList),
            showingResult: true,
            enablePlus:false,
            enableDivision:false,
            modalIsOpen:false,
            enableInput:false,
        }
    }else {
        return state;
    }
};

export default calculator;
