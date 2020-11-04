import React, { Component, Fragment } from "react";

class Message extends Component {
  render() {
    const pseudo=this.props.pseudo
    const messageClone=this.props.messages.slice()
    let cnt=0
    const messagesDisplay=
    messageClone
      .reverse()
      .map(m=>
            <Fragment key={cnt++}>
              <li style={{color:(m.pseudo==pseudo?'green':'red')}}>
                {m.pseudo} ({m.time}) : {m.message}
              </li>
            </Fragment>
          )

    return (
      <Fragment>
        <h1>Messages: {pseudo}</h1>
        <ul>
        {messagesDisplay}
        </ul>
      </Fragment>
    );
  }
}

export default Message;
