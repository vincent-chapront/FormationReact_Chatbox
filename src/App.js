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

    getFormattedTime=()=>{
        const date=new Date()
        const hour=date.getHours().toString()
        const min=date.getMinutes().toString()
        const sec=date.getSeconds().toString()
        return (hour.length==1?"0":"")+hour+":"+(min.length==1?"0":"")+min+":"+(sec.length==1?"0":"")+sec
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
