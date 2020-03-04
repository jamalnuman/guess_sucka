<template>
  
  <div class="guess-index">
   <span id="title-span">Welcome to GUESS SUCKA!</span>
    <div id="greating">
      <span>Please Select from the following categories to play.</span>
    </div>
  <form v-on:submit.prevent="startGame()">
    <div id="question-wrapper">
      <h4>Select the number of questions (btw 1 and 50):</h4>
      <label for="quantity">
    </label>
      <input v-model='numberOfQuestions' type="number" id="quantity" name="quantity" min="1" max="50">
    </div>

    <div id="question-wrapper">
      <h4>Please select a category from the drop-down menu.</h4>
      <select v-model='userCategory'>
        <option v-for='category in this.selectCategory'>{{category}}</option>
      </select>
    </div>

    <div id="question-wrapper">
      <h4>Please select a level of difficulty.</h4>
      <select v-model='userDifficulty'>
        <option v-for='difficulty in this.difficultyLevel'>{{difficulty}}</option>
      </select>
    </div id="button-wrapper">
    <router-link  v-bind:to="'/guess?amount=' + numberOfQuestions + '&category=10&difficulty=' + userDifficulty + '&type=multiple'"><input type="submit" name="Start the game!" id="submit-button"></router-link><!-- ..do a router link..to the guessindex page...within the router link include the params...then use this.router.params to do string interpolations -->
  </form>  
  </div>
</template>

<!-- /foo?user=1 -->

<style>
</style>


<script>
  var axios = require("axios")
  
export default {
  data: function() {
    return {

      numberOfQuestions: '',
      userCategory: "",
      selectCategory: ['Entertainment: Books', 'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Television', 'Science & Nature', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Celebrities', 'Animals', 'Vehicles'],
      userDifficulty: "",
      difficultyLevel: ['easy', 'medium', 'hard']
      
    };
  },
  created: function() {
  },
  methods:{}
};
</script>
