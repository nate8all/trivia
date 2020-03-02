import React, { Component } from 'react';
import { isConstructorDeclaration } from 'typescript';
import {buildFirebase} from '../clients/firebase.js';
// import components


class Question extends Component {
  constructor (props) {
    super(props);
    this.state = ""
  }
  render() {
    let kahoot = buildFirebase();
    let question = kahoot.ref("/question");
    question.once("value").then(function(data) {
      const questions = data.val();
    });
     
    return (
      <div>
        <h1>{this.props.data.question}</h1>
      </div>
       if (this.state.error) {
        return <div>{this.state.errorMessage}</div>
      } else if (this.state.imageUrl) {
        return <Giphy imageUrl={this.state.imageUrl}/>;
      } else {
        return null;
      }
    );
  }
}

export default Question;