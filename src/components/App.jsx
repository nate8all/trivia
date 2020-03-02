import React, { Component } from 'react';
import '../css/App.css';
import { Trivia, sample_data } from './../question_data.js';
import Question from './Question';
// import components

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {data: this.getData()};
  }

  getData() {
    let project_data = 
      new Trivia(sample_data.question.question_text,
        sample_data.question.choices,
        sample_data.question.correct_choice_index);
        console.log(project_data);
    return project_data;
  }

  render() {
    return (
      <div className="app">
        Trivia!
        <Question></Question>        
      </div>
    );
  }
}

export default App;