import React, { Component } from "react";

const withPlaceHolder = WrappedComponent =>
  class HOC extends Component {
    dbConnect=()=>{
      console.log("DbConnect")
    }

    render() {
      return (
          <WrappedComponent placeHolder="placeholder HOC" connexion={this.dbConnect}/>
      );
    }
  }

export default withPlaceHolder;
