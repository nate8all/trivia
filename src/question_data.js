// define a class to hold the sampe_data.json
// will be used in our applicatoin

// what information is needed to display a question?
// question (question_text_) 
// potential answers (choices)
// correct answer indication (correct_choice_index)

class Trivia {
    constructor (question, choices, answer){
            this.question = question;
            this.choices =choices;
            this.answer = answer;
    }
}

let sample_data = {
    "question": {
        "choices": [
            "48",
            "13",
            "52",
            "50"
        ],
        "correct_choice_index": 3,
        "question_text": "How many states are in the United States?",
        "user_id": "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
    }
};

export { Trivia, sample_data };