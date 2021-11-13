import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import * as actions from '../actions';
import NumBtn from '../components/NumBtn';
import Result from '../components/Result';
import ClearBtn from '../components/ClearBtn';
import SelectDialog from '../components/selectDialog';
import UndoBtn from '../components/UndoBtn';
// import Logo from '../image/warizan_logo.png';
import Tite from '../image/title.png';
import './CalculatorContainer.css';

class CalculatorContainer extends Component {
    render() {
      const { calculator, actions} = this.props;
      return (
        <div className='calculator-main'>
          <div className='calculator-title'>
            <div className='calculator-container'>
              <div>
                <Result result={calculator.resultValue} />
              </div>
              <div>
                <img src={Tite} width='300px' alt='warizan calculator'></img>
              </div>
            </div>
          </div>
          <div className='calculator-container'>
            <NumBtn n={2} onClick={() => actions.onNumClick(2)} result={calculator.resultValue}/>
            <NumBtn n={3} onClick={() => actions.onNumClick(3)} result={calculator.resultValue}/>
            <NumBtn n={5} onClick={() => actions.onNumClick(5)} result={calculator.resultValue}/>
            <NumBtn n={7} onClick={() => actions.onNumClick(7)} result={calculator.resultValue}/>
            <NumBtn n={11} onClick={() => actions.onNumClick(11)} result={calculator.resultValue}/>
          </div>
          <div className='calculator-container'>
            <NumBtn n={-1} onClick={() => actions.onNumClick(-1)} result={0} />
            <NumBtn n={1} onClick={() => actions.onNumClick(1)} result={0}/>
            <NumBtn n={100} onClick={() => actions.onAllNumClick(100)} result={0}/>
            <UndoBtn onClick={actions.onUndoClick}/>
            <ClearBtn onClick={actions.onClearClick}/>
          </div>
          <div>
            <SelectDialog calculator={calculator} actions={actions}/>
          </div>
        </div>
      );
    }
  }

  const mapState = (state,ownProps) => ({
      calculator: state.calculator,
  });

  function mapDispatch(dispatch){
      return {
          actions: bindActionCreators(actions,dispatch),
      };
  }
  
  export default connect(mapState,mapDispatch)(CalculatorContainer);