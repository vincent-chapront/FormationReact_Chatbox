import React, { Component } from 'react'
import './App.css'
import Message from './Components/Message'
import Formulaire from './Components/Formulaire'
import CouleurProvider, {CouleurContext} from './Components/Couleur'
import SetCouleur from './Components/SetCouleur'
 
class App extends Component {
    
    state={name:"", messages:[]}

    componentDidMount(){
        const ls=JSON.parse(localStorage.getItem('state'))
        if(ls!==null && ls!==undefined)
        {
          this.setState(ls)
        }
        const name=this.props.match.params.pseudo
        this.setState({name:name})
    }

    getFormattedTime=()=>{
        const date=new Date()
        const hour=date.getHours().toString()
        const min=date.getMinutes().toString()
        const sec=date.getSeconds().toString()
        return (hour.length===1?"0":"")+hour+":"+(min.length===1?"0":"")+min+":"+(sec.length===1?"0":"")+sec
    }

    componentDidUpdate(){
      localStorage.setItem('state', JSON.stringify(this.state))
    }

    handlerAddMessage=(message)=>{
        const messages=this.state.messages
        const messageClone=messages.slice()
        const time = this.getFormattedTime()
        messageClone.push({pseudo:this.state.name, message:message, time:time})
        this.setState({messages:messageClone})
    }

    render () {
        const {name,messages} = this.state
        return (
            <CouleurProvider>
                <CouleurContext.Consumer>
                    { context=> (
                        <div className="composant">
                            <p className="composantTitle">Composant : App.js</p>
                            <SetCouleur/>
                            <h1 style={{color:context.state.couleur}}>Bonjour : {name}</h1>
                            <Formulaire handler={this.handlerAddMessage}/>
                            <Message pseudo={name} messages={messages}/>
                        </div>
                        )
                    }
                </CouleurContext.Consumer>
            </CouleurProvider>
        )
    }
}

export default App
