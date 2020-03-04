<template>
  <div class="guess-index">
    <span id="title-span">Welcome to GUESS SUCKA!</span>

    <div id="wrapup-page" v-if="isHidden">

      <h1>RESULTS:</h1>
      <p>You got {{ rightCount}} question(s) correct and {{ wrongCount }} question(s) wrong.</p>

        <ul class="result-lists" v-for="question in this.questions">
          <li v-if="question.userChoice === question.correct_answer">
            Good job, you guessed correctly. You chose {{question.userChoice}}.
          </li>

          <li v-else>
            You chose {{question.userChoice}}, but the correct answer is {{question.correct_answer}}.
          </li>
        </ul>
       <div id="button-wrapper">
       <button id="submit-button" @click="restartGame">
         Restart Game
        </button>
      </div>
    </div>

    <div id="main-wrapper" v-if="!isHidden">

      <div id="question-wrapper">
        <h2>Question:</h2>
        <h3> {{ translate(questions[incrementer].question) }} </h3>
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
                    "category": "", 
                    "type": "", 
                    "difficulty": "", 
                    "question": "", 
                    "correct_answer": "", 
                    "incorrect_answers": [] 
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
      .get(`/api.php?amount=${this.$route.query.amount}&category=11&difficulty=${this.$route.query.difficulty}&type=multiple`)
      .then(response => {

        console.log(response)
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
    translate: function(inputString) {
      var parser = new DOMParser()
      var encodedString = parser.parseFromString(inputString, "text/html")
      return encodedString.body.innerText;
    },
    restartGame: function() {
      axios
        .get("/api.php?amount=4&category=11&difficulty=easy&type=multiple")
        .then(response => {
          this.questions = response.data.results;
          this.questions.forEach(function(question) {
            question.incorrect_answers.push(question.correct_answer).shuffle;
          });
        });
      this.incrementer = 0;
      this.isHidden = false;
      this.rightCount = 0;
      this.wrongCount = 0;  
      this.$router.push('/')
    }
  }
};
</script>