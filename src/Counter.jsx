import React, { Component } from "react";

class Counter extends Component {
  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  getDecrementStatus = () => {
    if (this.props.counter.value < 1) {
      return "disabled";
    } else return "";
  };

  render() {
    const { counter, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{counter.value}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-primary btn-sm m-2"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
        </div>
        <div className="col">
          <button
            className={`btn btn-primary btn-sm m-2 ${this.getDecrementStatus()}`}
            onClick={() => onDecrement(counter)}
          >
            -
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => onDelete(counter.id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
