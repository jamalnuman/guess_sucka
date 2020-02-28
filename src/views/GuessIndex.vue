<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div id="main-wrapper" v-for="(values, name) in questions[incrementer]">

      <h2>Question:</h2>
      <h3>{{ name }}</h3>

      <select v-model="value">
        <option v-for="value in values">
          {{ value }}
        </option>
      </select>

      <button v-on:click="submitAnswer()">
        Submit Answer
      </button>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Welcome to GUESS SUCKA!",
      questions: [
                 {"What is the longest river in the World?": ["Nile","Amazon","Congo","Yellow"]},
                 {"What is the most populous country in the world?": ["United States", "Brazil", "China", "Nigeria"]}
                 ],
      answers: ["Nile","China"],
      value: "",
      turn: 1,
      winCount: 0,
      incrementer: 0
    };
  },
  created: function() {},
  methods: {
    submitAnswer: function() {
      this.answers.forEach(function(word) {
        if (this.value === word) {
          this.turn += 1;
          this.winCount += 1;
          console.log("Win!");
        } else {
          this.turn += 1;
          console.log("Lose!");
        }
      });
      this.incrementer += 1;
    }
  }
};
</script>