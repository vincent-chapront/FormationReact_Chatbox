import React, {Component} from 'react'

const CouleurContext = React.createContext()

class CouleurProvider extends Component{
    state={couleur:"lightgreen"}

    changeCouleur=couleur=>{
        const state= this.state
        state.couleur=couleur
        this.setState(state)
    }

    render(){
        return (
            <CouleurContext.Provider value={{state:this.state, changeCouleur:this.changeCouleur}}>
                {this.props.children}
            </CouleurContext.Provider>
        )
    }
}

export {CouleurContext}
export default CouleurProvider