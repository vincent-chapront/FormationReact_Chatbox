import React, { Component } from "react";

const withDbConnection = WrappedComponent =>
  class HOC extends Component {
    dbConnect=()=>{
      console.log("message from withDbConnection")
    }

    render() {
      return (
          <WrappedComponent {...this.props} connexion={this.dbConnect}/>
      );
    }
  }

export default withDbConnection;
