import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import './Message.css';
import {CouleurContext} from './Couleur'

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
      <CouleurContext.Consumer>
        { context=> (
          <div className="composant">
          <p className="composantTitle">Composant : Message.js</p>
            <h1
                    style={{color:context.state.couleur}}>Messages: {pseudo}</h1>
            <ul>
            {messagesDisplay}
            </ul>
          </div>)
        }
      </CouleurContext.Consumer>
    );
  }
}

Message.propTypes={
  pseudo:PropTypes.string,
  messages:PropTypes.array  
}


export default Message;
