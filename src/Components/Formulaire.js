import React, { Component, Fragment } from "react";

class Formulaire extends Component {
  state={pseudo:"", message:""}

  componentDidMount(){
      const pseudo=this.props.pseudo
      this.setState({pseudo:pseudo})
  }

  change=event=>{
      const { name , value }= event.target
      this.setState({ [name]:value})
  }

  submit=event=>{
      event.preventDefault()
      this.props.handler(this.state.message)
  }

  render() {
    const {pseudo}=this.state
    return (
      <Fragment>
        <form onSubmit={this.submit}>
          <p>{pseudo}</p>
          <textarea onChange={this.change} name='message'></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </Fragment>
    );
  }
}

export default Formulaire;
