import React, { Component } from 'react';

import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)}  />
                <hr />
                <button
                    onClick={() => this.props.onStoreResult(this.props.ctr)}
                    >
                    Store Result
                </button>
                <ul>
                    {this.props.storedResults.map(result => {

                        console.log('result', result);

                        return (
                            <li
                                key={result.id}
                                onClick={() => this.props.onDeleteResult(result.id)}
                                style={{
                                    cursor: 'pointer',
                                    border: '1px solid red',
                                    width: '150px',
                                    margin: '3px 16px',
                                    listStyle: 'none',
                                    textAlign: 'center'
                                }}
                                >
                                {result.val}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {            
            return dispatch({
                type: actionTypes.INCREMENT
            });
        },
        onDecrementCounter: () => {
            return dispatch({
                type: actionTypes.DECREMENT
            });
        },
        onAddCounter: (amount) => {
            return dispatch({
                type: 'ADD',
                amount: amount
            });
        },
        onSubtractCounter: (amount) => {
            return dispatch({
                type: actionTypes.SUBTRACT,
                amount: amount
            });
        },
        onStoreResult: (result) => {
            return dispatch({
                type: actionTypes.STORE_RESULT,
                result: result
            })
        },
        onDeleteResult: (itemId) => {
            return dispatch({
                type: actionTypes.DELETE_RESULT,
                id: itemId
            })
        }
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(Counter);

