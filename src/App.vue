<template> 
  <div id="app">
<!--     <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
body {
  background-color: Azure;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.guess-index {
  padding: 30px;
}

#title-span {
  border: 2px solid black;
  background-color: BurlyWood;
  padding: 5px 20px;
  font-size: 3.5em;
  border-radius: 40px;
}

#main-wrapper {
  margin-top: 25px;
}

#choice-wrapper {
  border: 2px solid black;
  background-color: beige;
  margin: 10px;
  padding: 16px 0;
}

#question-wrapper {
  border: 2px solid black;
  background-color: beige;
  margin: 10px;
  padding-bottom: 30px;
}

#questions-select-box {
  font-size: 1.6em;
  width: 50%;
  background-color: Azure;
}

#button-wrapper {
  margin: 10px;
}

#submit-button {
  border: 2px solid black;
  border-radius: 30px;
  text-decoration: none;
  background-color: LemonChiffon;
  font-size: 1em;
  width: 50%;
  padding: 10px 20px;
}

#wrapup-page {
  border: 4px solid black;
  background-color: beige;
  margin-top: 25px;
}

.result-lists {
  text-align: justify;
  width: 46%;
  display: inline-block;
}

.result-lists li{
  padding: 10px 0;
}
</style>
