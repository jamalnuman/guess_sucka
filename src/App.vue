<template> 
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ui">UI</router-link> 
    </div> -->
    <router-view/>
  </div>
</template>

<style>
body {
  font-family: "Hoefler Text","Baskerville Old Face",Garamond,"Times New Roman",serif;
  background-image: url("/brickwall.png");
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.guess-index {
  padding: 40px;
}

#title-span {
  border: 10px solid black;
  background-color: #4D658D;
  padding: 20px 20px;
  font-size: 3.5em;
  border-radius: 40px;
}

#main-wrapper {
  margin-top: 25px;
}

#choice-wrapper {
  border: 2px solid black;
  background-color: #04A4C2;
  margin: 80px;
  padding: 40px 0;
  border-radius: 30px;

}

#question-wrapper {
  border: 2px solid black;
  background-color: #04A4C2;
  margin: 60px;
  padding-bottom: 50px;
  border-radius: 30px;
}

#questions-select-box {
  font-size: 1.6em;
  width: 50%;
  background-color: 000000;
}

#button-wrapper {
  margin: 20px;
}

#submit-button {
  border: 2px solid black;
  border-radius: 30px;
  text-decoration: none;
  background-color: #86989B;
  font-size: 1em;
  width: 50%;
  padding: 10px 20px;
}

#wrapup-page {
  border: 4px solid black;
  background-color: #D4F4FB;
  margin-top: 25px;
}

.result-lists {
  text-align: justify;
  width: 46%;
  display: inline-block;
  
}

.result-lists li{
  padding: 10px 0;
  margin: 10px;
}

#second-page {
  border: 2px solid black;
  background-color: #4D658D;
  padding: 5px 20px;
  font-size: 3.5em;
  border-radius: 40px;
}
#greating {
  margin: 50px;
  border: 5px solid black;
  background-color: #4D658D;
  padding: 9px 20px;
  font-size: 3.5em;
  border-radius: 90px;
}

</style>
