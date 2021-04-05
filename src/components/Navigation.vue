<template>
  <main>
    <nav class="navigation">
      <ul class="navigation__links">
        <router-link v-for="route in routes" :key="route.to" :to="route.to">
          {{ route.title }}
        </router-link>
      </ul>
    </nav>
  </main>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { title: 'Home', to: '/' },
        { title: 'Gallery', to: '/gallery' },
        { title: 'Articles', to: '/articles' },
        { title: 'Services', to: '/services' },
        { title: 'FAQ', to: '/faq' },
        { title: 'About Me', to: '/about' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  &__links {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & a {
      font-size: 1.375rem;
      position: relative;
      text-decoration: none;
      color: $fontColor;
      transition: color 350ms ease-in-out;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 200%;
        height: 3px;
        left: -15%;
        right: 0;
        bottom: -10px;
        border-radius: 5px;
        background: $tertiaryColor;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 300ms ease-in-out;
      }

      &:hover {
        color: $tertiaryColor;
        &::before {
          transform: scaleX(1);
          transform-origin: bottom right;
        }
      }
    }

    .router-link-exact-active {
      color: $tertiaryColor;
      &::before {
        transform: scaleX(1);
      }
    }
  }
}
</style>
