<template>
  <main class="desktop">
    <!-- Page layout -->
    <section class="desktop__content">
      <transition name="slide" mode="out-in" appear>
        <router-view />
      </transition>
    </section>
    <!-- Navigation menu -->
    <section class="desktop__nav">
      <Navbar />
    </section>
  </main>
</template>

<script>
import Navbar from './Navigation';

export default {
  name: 'DesktopView',
  components: { Navbar },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/route-transitions';

.desktop {
  display: grid;
  grid-template-columns: 6fr 1fr;
  min-height: 100vh;

  &__content {
    margin-top: 2em;
    padding: 50px;
    padding-top: 0;
  }

  &__nav {
    position: fixed;
    // Rounded 80px
    bottom: 10vh;
    // Rounded 50px
    right: 3.5vw;
  }
}
</style>
