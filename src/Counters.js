import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    console.log("Counters - render");
    const {
      counters,
      onReset,
      onIncrement,
      onDelete,
      onDecrement,
      onAddNew
    } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onAddNew}>
          Add New
        </button>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
