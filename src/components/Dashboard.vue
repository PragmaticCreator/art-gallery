<template>
  <main class="dashboard">
    <!-- Page layout -->
    <section class="dashboard__content">
      <transition name="dashboard__content-slide" mode="out-in" appear>
        <router-view />
      </transition>
    </section>
    <!-- Navigation menu -->
    <section class="dashboard__nav">
      <Navbar />
    </section>
  </main>
</template>

<script>
import Navbar from './Navigation';

export default {
  name: 'Dashboard',
  components: { Navbar },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  grid-template-columns: 6fr 1fr;
  min-height: 100vh;

  &__content {
    margin-top: 2em;
    padding: 30px;

    &-slide {
      // Duration of entering start and end states.
      &-enter-active {
        transition-delay: 800ms;
        transition: opacity 1s, transform 1s ease-in-out;
      }
      // Duration of leaving start and end states.
      &-leave-active {
        transition: opacity 1s ease-in-out, transform 800ms ease-in-out;
      }
      // Start of entered state
      &-enter {
        transform: translateX(-2em);
        opacity: 0;
      }
      // End of entered state
      &-enter-to {
        transform: translateX(0);
        opacity: 1;
      }
      // Start of leaving state
      &-leave {
        transform: translateX(0);
        opacity: 1;
      }
      // End of leaving state
      &-leave-to {
        transform: translateX(5em);
        opacity: 0;
      }
    }
  }

  &__nav {
    position: fixed;
    bottom: 100px;
    right: 50px;
  }
}
</style>
