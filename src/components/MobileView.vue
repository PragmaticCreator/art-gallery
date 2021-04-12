<template>
  <main class="mobile">
    <!-- Mobile View -->
    <section class="mobile__content">
      <transition name="slide" mode="out-in" appear>
        <router-view />
      </transition>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MobileView',
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/route-transitions';

.mobile {
  min-height: 100vh;
  &__content {
    margin-top: 2em;
    padding: 0 10px 30px 10px;
  }
}
</style>
