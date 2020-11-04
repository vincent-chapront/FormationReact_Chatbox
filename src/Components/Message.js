import React, { Component, Fragment } from "react";

class Message extends Component {
  render() {
    const messageClone=this.props.messages.slice()
    let cnt=0
    const messagesDisplay=
    messageClone
      .reverse()
      .map(m=>
        <Fragment key={cnt++}><li>{m.pseudo} ({m.time}) : {m.message}</li></Fragment>
          )

    console.log("messagesDisplay.length : "+messagesDisplay.length)
    console.log("this.props.messages : "+this.props.messages.length)

    return (
      <Fragment>
        <h1>Messages</h1>
        <ul>
        {messagesDisplay}
        </ul>
      </Fragment>
    );
  }
}

export default Message;
