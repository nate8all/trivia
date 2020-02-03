import React, { Component } from 'react';
import '../css/App.css';
import { Trivia, sample_data } from 'question_data';
import Question from './Question';
// import components

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {answer1: 'Chelsea, NYC', 
                  answer2: 'Bay Ridge, NYC', 
                  answer3: 'Chicago, Illinois', 
                  answer4: 'Tulsa, Oklahoma' };
  }

  getData() {
    let project_data = 
    new Trivia(sample_data.question.question_text,
    sample_data.question.choices,
    sample_data.question.correct_choice_index);
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