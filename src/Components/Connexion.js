import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import withPlaceHolder from "../hoc/withPlaceHolder"
class Connexion extends Component {

    state={name:"", redirect:null,canConnect:false, error:""}
    change=event=>{
        const { name , value }= event.target
        this.setState({ [name]:value})
    }

    componentDidMount(){
        this.props.connexion();
    }

    submit=event=>{
        event.preventDefault()
        if(this.state.name===""){
            this.setState({canConnect:false,error:"Le nom ne peut pas être vide",redirect:null})
        }
        else{
            this.setState({canConnect:true,redirect:"/app/"+this.state.name})
        }
    }

    render() {
        const { canConnect,redirect } = this.state

        if (canConnect) {
          return <Redirect to={redirect} push/>
        }

        const { name, error } = this.state

        const errorMessage=
            error
            ? <tr><td colSpan="2"> <p style={{color: 'red'}}>{error}</p></td></tr>
            : <Fragment/>
        
        return(
            <Fragment>
                <p>Page de connexion</p>
                <form onSubmit={this.submit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nom</td>
                                <td><input placeholder={this.props.placeHolder} name="name" type="text" onChange={this.change} value={name}/></td>
                            </tr>
                            {errorMessage}
                            <tr>
                                <td colSpan="2"><button type="submit">Connexion</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Fragment>
        );
    }
}

const wrappedComponent= withPlaceHolder(Connexion)

export default wrappedComponent;
