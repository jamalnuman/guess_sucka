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
        <option v-for='category in this.selectCategory'>{{category}}</option>
      </select>
    </div>

    <div>
      Please select a level of difficulty. 
      <select v-model='userDifficulty'>
        <option v-for='difficulty in this.difficultyLevel'>{{difficulty}}</option>
      </select>
    </div>
    <input type="submit" name="Start the game!">
  </form>  
  </div>
</template>

<!-- <select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select> -->


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
