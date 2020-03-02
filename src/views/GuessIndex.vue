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
                   // [
                   //   { question: "What is the most populous country in the world?" },
                   //   { answerOptions: ["United States", "China", "Brazil", "India"] },
                   //   { answer: "China"}
                   // ],
                   // [
                   //   { question: "How many total points were scored in the NBA's highest scoring game ever?" },
                   //   { answerOptions: ["305", "370", "391", "342"] },
                   //   { answer: "391"}
                   // ],
                   // [
                   //   { question: "What is the speed of light?" },
                   //   { answerOptions: ["670,616,629 miles per hour", "751,332,612 miles per hour", "572,333,679 miles per hour", "623,090,617 miles per hour"] },
                   //   { answer: "670,616,629 miles per hour"}
                   // ],
                   // [
                   //   { question: "What fast food chain has the most locations in the US?" },
                   //   { answerOptions: ["McDonalds", "Burger King", "Taco Bell", "Subway"] },
                   //   { answer: "Subway"}
                   // ],
                   // [
                   //   { question: "Who is the worst president in American history?" },
                   //   { answerOptions: ["Donald Trump", "Donald Trump", "Donald Trump", "Donald Trump"] },
                   //   { answer: "Donald Trump"}
                   // ],
                   // [
                   //   { question: "Approximately how many MILITARY deaths in total were there in World War 2?" },
                   //   { answerOptions: ["14 million", "24 million", "36 million", "6 million"] },
                   //   { answer: "Subway"}
                   // ],
                   // [
                   //   { question: "What is the most annoying form of musical expression?" },
                   //   { answerOptions: ["Country", "Country", "Country", "Country"] },
                   //   { answer: "Country"}
                   // ],
                   // [
                   //   { question: "What is the greater Tokyo area's population as of 2016?" },
                   //   { answerOptions: ["38 million", "25 million", "46 million", "19 million"] },
                   //   { answer: "38 million"}
                   // ],
                   // [
                   //   { question: "In what state is the highest bridge in the United States located in?" },
                   //   { answerOptions: ["Colorado", "California", "Washington", "Utah"] },
                   //   { answer: "Colorado"}
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
        this.question = response.data.results[0].question;
        this.correctAnswer = response.data.results[0].correct_answer;
        this.questions.answerOptions = response.data.results[0].incorrect_answers;
      });
  },
  methods: {
    submitAnswer: function() {
      if (this.incrementer < this.questions.length - 1) {
        if (this.choice === this.questions[this.incrementer][2].answer) {
            this.rightCount ++;
            this.answerArr.push(this.questions[this.incrementer][2].answer);
            this.choiceArr.push(this.choice);
            this.incrementer ++;
          } else {
            this.wrongCount ++;
            this.answerArr.push(this.questions[this.incrementer][2].answer);
            this.choiceArr.push(this.choice);
            this.incrementer ++;
          }
      } else if (this.incrementer === this.questions.length - 1) {
        if (this.choice === this.questions[this.incrementer][2].answer) {
            this.rightCount ++;
            this.answerArr.push(this.questions[this.incrementer][2].answer);
            this.choiceArr.push(this.choice);
            this.isHidden = true;
          } else {
            this.wrongCount ++;
            this.answerArr.push(this.questions[this.incrementer][2].answer);
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