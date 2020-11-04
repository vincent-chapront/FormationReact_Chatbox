import React, { Component } from 'react'
import './App.css'
 
class App extends Component {
    
    state={name:""}

    componentDidMount(){
        const name=this.props.match.params.name
        this.setState({name:name})
    }

    render () {
        const {name} = this.state
        return (
        <div>
            <p>APP</p>
            <p>Bonjour : {name}</p>
        </div>
        )
    }
}

export default App
