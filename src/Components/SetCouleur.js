import React, { Component, Fragment } from "react";
import {CouleurContext} from './Couleur'

class SetCouleur extends Component {

  render() {
    return (
      <CouleurContext.Consumer>
        { context=> (
            <div className="composant">
              <p className="composantTitle">Composant : SetCouleur.js</p>
              <table>
                <tbody>
                  <tr>
                    <td><button onClick={()=>context.changeCouleur("blue")} style={{backgroundColor:"blue"}}>Bleu</button></td>
                    <td><button onClick={()=>context.changeCouleur("lightgreen")} style={{backgroundColor:"lightgreen"}}>Vert</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            )
        }
      </CouleurContext.Consumer>
    );
  }
}

export default SetCouleur;
