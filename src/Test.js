import React, { Component, PureComponent } from "react";

let id = null;

export default class Test extends PureComponent {
  state = {
    count: 0,
    foo: 0,
    bar: 0,
    baz: 0,
  };

  componentDidMount() {
    console.log("mounted");
    id = setInterval(() => {
      console.log("KEK");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("UPDATED");
  }

  componentWillUnmount() {
    clearInterval(id);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
        {this.props.hello}
      </div>
    );
  }
}
