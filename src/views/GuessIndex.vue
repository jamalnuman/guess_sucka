<template>
  <div class="guess-index">
    <span id="title-span">Welcome to GUESS SUCKA!</span>

    <div id="wrapup-page" v-if="isHidden">
      <h1>RESULTS:</h1>
      <p>You got {{ rightCount }} question(s) correct and {{ wrongCount }} question(s) wrong.</p>

      <div>
        <ol class="result-lists">
          <li v-for="feedbackChosenAnswer in choiceArr">
            You chose {{ feedbackChosenAnswer }} as an answer.
          </li>
        </ol>
        <ol class="result-lists">
          <li v-for="feedbackRightAnswer in answerArr">
            The correct answer is: {{ feedbackRightAnswer }}.
          </li>
        </ol>
      </div>
      
      <button @click="restartGame">
        Restart Game
      </button>
    </div>

    <div id="main-wrapper" v-if="!isHidden">
      <div id="question-wrapper">
        <h2>Question:</h2>
        <h3> {{ questions[incrementer].question }} </h3>
        <!-- <div v-for="fQuestion in questions[incrementer][0]">
            {{ fQuestion }}
        </div> -->
      </div>

      <div id="choice-wrapper">
        <select id="questions-select-box" v-model="questions[incrementer].userChoice">
          <option v-for="choice in questions[incrementer].incorrect_answers">
            {{ choice }}
          </option>
        </select>
      </div>

      <div id="button-wrapper">
        <button id="submit-button" @click="submitAnswer">
          Submit Answer
        </button>
      </div>

    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      questions: [
                  { 
                    "category": "Entertainment: Film", 
                    "type": "multiple", 
                    "difficulty": "easy", 
                    "question": "Which of the following was not one of &quot;The Magnificent Seven&quot;?", 
                    "correct_answer": "Clint Eastwood", 
                    "incorrect_answers": [ "Steve McQueen", "Charles Bronson", "Robert Vaughn" ] 
                  }
                ],
      isHidden: false,
      incrementer: 0,
      rightCount: 0,
      wrongCount: 0
    }
  },
  created: function() {
    axios
      .get("https://opentdb.com/api.php?amount=3&category=11&difficulty=easy&type=multiple")
      .then(response => {
        this.questions = response.data.results;

        this.questions.forEach(function(question) {
          question.incorrect_answers.push(question.correct_answer).shuffle;
        });

      });
  },
  methods: {
    submitAnswer: function() {
      if (this.questions[this.incrementer].userChoice === this.questions[this.incrementer].correct_answer) {
        this.rightCount++;
      } else {
        this.wrongCount++;
      }

      if (this.incrementer < this.questions.length - 1) {
        this.incrementer++;
      } else if (this.incrementer === this.questions.length - 1) {
        this.isHidden = true;
      }
    },
    restartGame: function() {
      this.incrementer = 0;
      this.isHidden = false;
    }
  }
};
</script>