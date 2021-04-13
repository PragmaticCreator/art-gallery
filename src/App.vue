<template>
  <div id="app" class="app__svg">
    <!-- Website title -->
    <Header :isMobile="isMobile" />

    <!-- Desktop View -->
    <Dashboard v-if="!isMobile" />
    <!-- Mobile View -->
    <MobileView v-else />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Dashboard from './components/DesktopView';
import MobileView from './components/MobileView';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Dashboard,
    MobileView,
    Footer,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  created() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      let screenWidth = screen.width;
      screenWidth <= 576 ? (this.isMobile = true) : (this.isMobile = false);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Slab:wght@400;500&display=swap');

html {
  box-sizing: border-box;
  font-size: 100%;
  line-height: 1.5;
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
  font-family: $fontPrimary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  background-color: $primaryColor;
  color: $fontColor;
  overflow: hidden;
}

.app__svg {
  background: url('./assets/polka-dots.svg');
}

@include for-phones {
  html {
    font-size: 0.75rem;
  }
}

@include for-tablets {
  html {
    font-size: 0.875rem;
  }
}

@include for-desktop {
  html {
    font-size: 1rem;
  }
}
</style>
