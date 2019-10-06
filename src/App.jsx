import React, { Component, Fragment } from "react";
import Counters from "./Counters";
import NavBar from "./NavBar";

class App extends Component {
  constructor() {
    console.log("App - constructor");
    super();
    this.state = {
      counters: [
        { id: 0, value: 1 },
        { id: 1, value: 2 },
        { id: 2, value: 3 },
        { id: 3, value: 4 }
      ]
    };
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleIncrement = counterObj => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterObj);
    counters[index] = { ...counterObj };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) counters[index].value--;
    this.setState({ counters });
  };

  handleAddNew = () => {
    const counters = [
      ...this.state.counters,
      { id: this.state.counters.length, value: 0 }
    ];
    this.setState({ counters });
  };

  render() {
    console.log("App - render");
    return (
      <Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onAddNew={this.handleAddNew}
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
