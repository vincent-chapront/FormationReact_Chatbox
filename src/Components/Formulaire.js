import React, { Component } from "react";
import { CouleurContext } from "./Couleur";

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
      this.setState({message:""})
  }

  render() {
    const {pseudo,message}=this.state
    return (
      <CouleurContext.Consumer>
        { context=> 
            <form 
                onSubmit={this.submit} >
              <p>{pseudo}</p>
              <textarea onChange={this.change} name='message' value={message}></textarea>
              <button type="submit"
                style={{backgroundColor:context.state.couleur}}>Envoyer</button>
            </form>
        }
      </CouleurContext.Consumer>
    );
  }
}

export default Formulaire;
