import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1 className="pa6 tc f1">
        OOOOOPS....
        <br /> Looks like an error occured.
      </h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;