<template>
  <div class="guess-index">
    <span id="title-span">{{ message }}</span>

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
        <h3> {{ question }} </h3>
        <!-- <div v-for="fQuestion in questions[incrementer][0]">
            {{ fQuestion }}
        </div> -->
      </div>

      <div id="choice-wrapper">
        <select id="questions-select-box" v-model="choice">
          <option v-for="choice in questions.answerOptions">
            {{ choice }}
          </option>
          <p> {{ }} </p>
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
      message: "Welcome to GUESS SUCKA!",
      questions: [
                   [
                     { question: "" },
                     { answerOptions: [""] },
                     { answer: ""}
                   ]
                   
                 ],
      isHidden: false,
      incrementer: 0,
      counter: 0,
      choice: "",
      choiceArr: [],
      questionArr: [],
      answerArr: [],
      rightCount: 0,
      wrongCount: 0,
      question: "",
      correctAnswer: "",
      incorrectAnswers: ""
    }
  },
  created: function() {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple")
      .then(response => {
        var counter = 0;
        this.question = response.data.results[0].question;
        this.correctAnswer = response.data.results[0].correct_answer;
        this.questions.answerOptions = response.data.results[0].incorrect_answers;
        this.questions.answerOptions.push(this.correctAnswer).shufle;
      });
  },
  methods: {
    submitAnswer: function() {
      if (this.incrementer < this.questions.length - 1) {
        if (this.choice === this.correctAnswer) {
            this.rightCount ++;
            this.answerArr.push(this.correctAnswer);
            this.choiceArr.push(this.choice);
            this.incrementer ++;
    
          } else {
            this.wrongCount ++;
            this.answerArr.push(this.correctAnswer);
            this.choiceArr.push(this.choice);
            this.incrementer ++;
    
          }
      } else if (this.incrementer === this.questions.length - 1) {
        if (this.choice === this.correctAnswer) {
            this.rightCount ++;
            this.answerArr.push(this.correctAnswer);
            this.choiceArr.push(this.choice);
            this.isHidden = true;
    
          } else {
            this.wrongCount ++;
            this.answerArr.push(this.correctAnswer);
            this.choiceArr.push(this.choice);
            this.isHidden = true;
    
          }
      }
    },
    restartGame: function() {
      this.incrementer = 0;
      this.isHidden = false;
    }
  }
};
</script>