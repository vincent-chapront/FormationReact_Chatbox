import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import './Message.css';

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
              <li className={m.pseudo===pseudo?"current":"other"}>
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

Message.propTypes={
  pseudo:PropTypes.string,
  messages:PropTypes.array  
}


export default Message;
