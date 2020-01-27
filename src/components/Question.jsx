import React, { Component } from 'react';
import { isConstructorDeclaration } from 'typescript';
// import components


class Question extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    let question = "Where is the Google Code Next Office located?";
    return (
      <div>
        <h1>{question}</h1>

      </div>
    );
  }
}

export default Question;