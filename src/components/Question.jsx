import React, { Component } from 'react';
import { isConstructorDeclaration } from 'typescript';
// import components


class Question extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    let kahoot = firebase.database();
    let question = kahoot.ref("/question");
    question.once("value").then(getQuestions);
    return (
      <div>
        <h1>{this.props.data.question}</h1>
      </div>
    );
  }
}

export default Question;