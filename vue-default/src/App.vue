<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/basic">Basic</router-link>
    <br>
    <router-link to="/databindingInputTxt">DatabindingInputTxt</router-link> | 
    <router-link to="/databindingAttribute">DatabindingAttribute</router-link> | 
    <router-link to="/databindingClassAndStyle">DatabindingClassAndStyle</router-link>
    <br>
    <router-link to="/listRendering">ListRendering</router-link> | 
    <router-link to="/renderingGrammar">RenderingGrammar</router-link> | 
    <router-link to="/eventHandling">EventHandling</router-link>
    <br>
    <router-link to='/computedExam'>ComputedExam</router-link> | 
    <router-link to='/watchExam'>WatchExam</router-link>
    <br>
    <router-link to='/searchView'>SearchView</router-link> | 
    <router-link to='/saveView'>SaveView</router-link>
    <br>
    <router-link to='/serverData'>ServerData</router-link>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;  
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
