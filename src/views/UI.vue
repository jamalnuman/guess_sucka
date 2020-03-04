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
      </div>
      
      <button id="submit-button" type="submit" >
        Start the game!
      </button> 
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
      selectCategory: ['Entertainment: Books', 'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Television', 'Science & Nature', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Celebrities', 'Animals', 'Vehicles'],
      userDifficulty: "",
      difficultyLevel: ['easy', 'medium', 'hard']
      
    };
  },
  created: function() {
  },
  methods: {
  startGame: function() {
    axios

      .get(`/api.php?amount=${this.numberOfQuestions}&category=11&difficulty=${this.userDifficulty}&type=multiple`)
      .then(response => {
        console.log(response)
      });
    }
  }
};
</script>
