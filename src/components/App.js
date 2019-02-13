import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, newNumber, changeNumber } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter count={this.props.count} clicks={this.props.clicks}
          onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} onChangeNumber={this.props.onChangeNumber}
          onNewNumber={this.props.onNewNumber} searchNumber={this.props.searchNumber} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onChangeNumber: () => dispatch(changeNumber()),
    onNewNumber: (number) => dispatch(newNumber(number))
  };
}

function mapStateToProps(state) {
  return {
    count: state.count,
    clicks: state.clicks,
    searchNumber: state.searchInputted
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);