<template>
  <div class="guess-home">
    <h1>Welcome to GUESS SUCKA!</h1>
    <div v-for="question in questions">
      <h3>Number of Questions:</h3>
      <select>
        <option v-for="number in numberOfQuestions" v-model="numberOfQuestions" >
          {{number}}
        </option>
      </select>
        <h3> CATEGORY: {{ question.gameCategory }} </h3>
     <select>
       <option v-for="category in gameCategorys" >

         
       </option>
     </select>

        <h2>DIFFICULTY:</h2>
      <select>
        <option v-for="option in categoryOptions">
          {{option}}
        </option>
      <!-- <h3>  {{ question.difficulty }} </h3> -->
        
      </select>
      <h3> {{" =================== "}} </h3>
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
  var axios = require("axios")

export default {
  data: function() {
    return {
      questions: "",
      categoryOptions: ["easy", "medium", "hard"],
      gameCategorys: ["General Knowledge",
                  "Entertainment: Books",
                  "Entertainment: Film",
                  "Entertainment: Music",
                  "Entertainment: Musicals & Theatres",
                  "Entertainment: Television",
                  "Entertainment: Video Games",
                  "Entertainment: Board Games",
                  "Science & Nature",
                  "Science: Computers",
                  "Science: Mathematics",
                  "Mythology",
                  "Sports",
                  "Geography",
                  "History",
                  "Politics",
                  "Art",
                  "Celebrities",
                  "Animals",
                  "Vehicles",
                  "Entertainment: Comics",
                  "Science: Gadgets",
                  "Entertainment: Japanese Anime & Manga",
                  "Entertainment: Cartoon & Animations"
                   ],

      numberOfQuestions: [10, 20, 30, 40, 50, 60]

    };
  },
  created: function() {
   var numberOfQuestionll = 10;
   var gameCategorys = 16 ;
   var difficultyOfGame = "easy";
   var typeOfTheGame = "multiple";

    axios

      .get("https://opentdb.com/api.php?amount=" 
        + `${numberOfQuestionll}` 
        + `&category=` + `${gameCategorys}`
        + `&difficulty=` + `${difficultyOfGame}`
        + `&type` + `${typeOfTheGame}`
        )

      .then(response => {
      this.questions = response.data.results;
    });


  },
  methods: {
    submitAnswer: function() {

    }
  }
};
</script>