import React, {Component} from 'react'

const CouleurContext = React.createContext()

class CouleurProvider extends Component{
    state={couleur:"lightgreen"}

    render(){
        return (
            <CouleurContext.Provider value={{state:this.state}}>
                {this.props.children}
            </CouleurContext.Provider>
        )
    }
}

export {CouleurContext}
export default CouleurProvider