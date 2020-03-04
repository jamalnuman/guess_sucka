<template>
  
  <div class="guess-index">
   <span id="title-span">Welcome to GUESS SUCKA!</span>
    <div id="greating">
      <span>Please select from the following categories to play.</span>
    </div>
  <form v-on:submit.prevent="startGame()">
    <div id="question-wrapper">
      <h4 class="h4-changes">Select the number of questions (btw 1 and 50):</h4>
      <label for="quantity">
    </label>
      <input v-model='numberOfQuestions' type="number" id="quantity" name="quantity" min="1" max="50">
    </div>

    <div id="question-wrapper">
      <h4 class="h4-changes">Please select a category from the drop-down menu.</h4>
      <select v-model='userCategory'>
        <option v-for='category in this.selectCategory' :value="category.id">{{category.name}}</option>
      </select>
    </div>

    <div id="question-wrapper">
      <h4 class="h4-changes">Please select a level of difficulty.</h4>
      <select v-model='userDifficulty'>
        <option v-for='difficulty in this.difficultyLevel'>{{difficulty}}</option>
      </select>

    </div id="button-wrapper">
    <router-link v-bind:to="'/guess?amount=' + numberOfQuestions + '&category=' + userCategory + '&difficulty=' + userDifficulty + '&type=multiple'"><input type="submit" id="submit-button" name="Start the game!"></router-link><!-- ..do a router link..to the guessindex page...within the router link include the params...then use this.router.params to do string interpolations -->
  </form>  
  </div>
</template>



<style>
</style>


<script>
  var axios = require("axios")
  
export default {
  data: function() {
    return {

      numberOfQuestions: '',  
      userCategory: "",
      selectCategory: [
                      {name: 'Entertainment_Books', id: 10}, 
                      {name: 'Entertainment_Film', id: 11}, 
                      {name: 'Entertainment_Music', id: 12}, 
                      {name: 'Entertainment_Television', id: 14}, 
                      {name: 'Science_Nature', id: 17}, 
                      {name: 'Mythology', id: 20}, 
                      {name: 'Sports', id: 21}, 
                      {name: 'Geography', id: 22}, 
                      {name: 'History', id: 23}, 
                      {name: 'Politics', id: 24}, 
                      {name: 'Celebrities', id: 26}, 
                      {name: 'Animals', id: 27}, 
                      {name: 'Vehicles', id: 28}],
      userDifficulty: "",
      difficultyLevel: ['easy', 'medium', 'hard']
      
    };
  },
  created: function() {
  },
  methods:{}
};
</script>
