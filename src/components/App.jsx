import React, { Component } from 'react';
import '../css/App.css';
import { Trivia, sample_data } from './../question_data.js';
import Question from './Question';
import { getRandomQuestion, buildFirebase } from '../clients/firebase'
// import components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.getData();
    this.pickAnotherQuestion = this.pickAnotherQuestion.bind(this);
  }

  getData() {
    var database = buildFirebase();
    var databaseRef = database.ref("/questions");

    databaseRef.once("value").then((data) => {
      const allQuestions = data.val();

      let firstQuestionData = getRandomQuestion(allQuestions);
      let firstQuestion = new Trivia(firstQuestionData.question_text,
        firstQuestionData.choices,
        firstQuestionData.correct_choice_index);

      this.setState({
        allQuestions: allQuestions,
        currentQuestion: firstQuestion
      });
    });
  }

  pickAnotherQuestion() {
    let nextQuestionData = getRandomQuestion(this.state.allQuestions);
    let nextQuestion  = new Trivia(nextQuestionData.question_text,
      nextQuestionData.choices,
      nextQuestionData.correct_choice_index);
    this.setState({
      currentQuestion: nextQuestion
    });
  }

  render() {
    if (this.state.currentQuestion) {
      return <Question data={this.state.currentQuestion} nextQuestion={this.pickAnotherQuestion}></Question>;
    } else {
      return <div className="app">Loading...</div>;
    };
  }
}

export default App;