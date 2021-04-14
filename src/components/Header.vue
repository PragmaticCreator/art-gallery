<template>
  <main>
    <section class="header">
      <header>
        <div class="header__title">Aaron Christopher's Galerie</div>
      </header>

      <button class="header__menu" v-if="isMobile" @click="showMenu = true">
        Menu
      </button>
    </section>

    <section v-if="showMenu" @click="showMenu = false">
      <Navigation class="header__nav" />
    </section>
  </main>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'Header',
  components: {
    Navigation,
  },
  props: {
    isMobile: { type: Boolean },
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  background-color: $secondaryColor;
  color: #f7f7f7;

  &__title {
    font-size: 1.3125rem;
    font-weight: 500;
  }

  &__menu {
    font-size: 1rem;
    padding: 3px 12px;

    color: $primaryColor;
    background-color: $secondaryColor;

    border: 1px solid $primaryColor;
    border-radius: 10px;

    cursor: pointer;
  }

  &__nav {
    border: 2px double $tertiaryColor;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $secondaryColor;
    opacity: 0.98;
    z-index: 98;

    ::v-deep .navigation__links a {
      font-size: 1.5rem;
      position: relative;
      text-decoration: none;
      color: $tertiaryColor;
      transition: color 300ms ease-in-out;

      &:not(:last-child) {
        margin-bottom: 50px;
      }
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 300%;
        height: 3px;
        left: -100%;
        right: 0;
        bottom: -10px;
        border-radius: 5px;
        background: $tertiaryColor;
        transform-origin: bottom center;
        transition: transform 300ms ease-in-out;
      }
    }
  }
}

@include for-phones {
    .header {
      padding: 10px 10px;
    }
  }
</style>
