import React, { Component } from 'react'
import './App.css'
import Message from './Components/Message'
import Formulaire from './Components/Formulaire'
 
class App extends Component {
    
    state={name:"", messages:[]}

    componentDidMount(){
        const name=this.props.match.params.pseudo
        this.setState({name:name})
    }

    handlerAddMessage=(message)=>{
        const messages=this.state.messages
        const messageClone=messages.slice()
        const date=new Date()
        const hour=date.getHours().toString()
        const min=date.getMinutes().toString()
        const sec=date.getSeconds().toString()
        const time=(hour.length==1?"0":"")+hour+":"+(min.length==1?"0":"")+min+":"+(sec.length==1?"0":"")+sec
        messageClone.push({pseudo:this.state.name, message:message, time:time})
        this.setState({messages:messageClone})
    }

    render () {
        const {name,messages} = this.state
        return (
        <div>
            <p>APP</p>
            <p>Bonjour : {name}</p>
            <Formulaire handler={this.handlerAddMessage}/>
            <Message messages={messages}/>
        </div>
        )
    }
}

export default App
