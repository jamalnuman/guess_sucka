<template>
  <div class="ui-index">
    <h1>Welcome to GUESS SUCKA!</h1>
    <p>Please Select from the following categories to play.</p>
  <form v-on:submit.prevent="startGame()">
    <div>
        <label for="quantity">Select the number of questions (btw 1 and 50):</label>
        <input v-model='numberOfQuestions' type="number" id="quantity" name="quantity" min="1" max="50">
    </div>

    <div>
      Please select a category from the drop-down menu.
      <select v-model='userCategory'>
        <option v-for='category in this.selectCategory' :value="category.id">{{category.name}}</option>
      </select>
    </div>

    <div>
      Please select a level of difficulty. 
      <select v-model='userDifficulty'>
        <option v-for='difficulty in this.difficultyLevel'>{{difficulty}}</option>
      </select>
    </div>
    <router-link v-bind:to="'/guess?amount=' + numberOfQuestions + '&category=' + userCategory + '&difficulty=' + userDifficulty + '&type=multiple'"><input type="submit" name="Start the game!"></router-link><!-- ..do a router link..to the guessindex page...within the router link include the params...then use this.router.params to do string interpolations -->
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
