import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
class Connexion extends Component {

    state={name:"", redirect:null}
    change=event=>{
        const { name , value }= event.target
        this.setState({ [name]:value})
    }

    submit=event=>{
        event.preventDefault()
        this.setState({redirect:"/app/"+this.state.name})
    }

    render() {
        if (this.state.redirect) {
          return <Redirect to={this.state.redirect} />
        }

        return(
            <Fragment>
                <p>Page de connexion</p>
                <form onSubmit={this.submit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nom</td>
                                <td><input name="name" type="text" onChange={this.change}/></td>
                            </tr>
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

export default Connexion;
