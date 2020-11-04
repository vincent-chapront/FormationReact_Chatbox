import React, { Component } from "react";

const withPlaceHolder = WrappedComponent =>
  class HOC extends Component {
    render() {
      return (
          <WrappedComponent placeHolder="placeholder HOC"  {...this.props}/>
      );
    }
  }

export default withPlaceHolder;
