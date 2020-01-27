import React, { Component } from 'react';
import '../css/App.css';
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