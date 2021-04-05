<template>
  <div id="app">
    <!-- Website title -->
    <Header />
    <!-- Side Navigation -->
    <Dashboard /> 
    <!-- Mobile display -->
    <!-- <router-view class="page-layout" /> -->
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Dashboard,
    Footer,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Slab:wght@400;500&display=swap');

html {
  box-sizing: border-box;
  font-size: 100%;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
  outline: none;
}

#app {
  font-family: 'Roboto Slab', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $primaryColor;
  color: $fontColor;  
  overflow: hidden;
}
</style>
