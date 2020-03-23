import React, { Component } from 'react';
// import components

//class Trivia {
//   constructor (question, choices, answer){
//     this.question = question;
//     this.choices = choices;
//     this.answer = answer;
//  }
// }

class Question extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(index) {
    if (this.props.data.answer === index) {
      alert("Correct");
      this.props.nextQuestion();
    }
    else {
      alert("Incorrect");
    }
  }
  render() {
    return (
      // expect props.data.question to be question_text
      <div>
        <h1>{this.props.data.question}</h1>
        <p>
          <button id="0" onClick={() => this.handleClick(0)}>{this.props.data.choices[0]}</button>
          <button id="1" onClick={() => this.handleClick(1)}>{this.props.data.choices[1]}</button>
          <button id="2" onClick={() => this.handleClick(2)}>{this.props.data.choices[2]}</button>
          <button id="3" onClick={() => this.handleClick(3)}>{this.props.data.choices[3]}</button>
        </p>
      </div>
    );
  }
}

export default Question;