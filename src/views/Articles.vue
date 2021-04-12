<template>
  <main>
    <section>
      <!-- Displaying every post from database. -->
      <article class="articles" v-for="article in articles" :key="article.id">
        <router-link :to="`./post/${article.id}`">
          <img :src="article.featured_media_src_url" alt="Featured media" />
          <span class="articles__title">
            {{ article.title.rendered }}
          </span>
        </router-link>
        <span class="articles__date"> {{ article.acf.date_created }} </span>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },

  created() {
    // Using the fetch API.
    // Appends the route in the main.js file and acceses the API.
    fetch(this.$api)
      .then((request) => request.json())
      .then((data) => {
        for (let article in data) {
          this.articles.push(data[article]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.articles {
  font-family: $fontAccent;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-align: center;
    text-decoration: none;
    color: $fontColor;
  }

  &:not(:last-child) {
    margin-bottom: 150px;

    &::before {
      content: '';
      position: absolute;
      width: 70vw;
      bottom: -80px;
      left: 30;
      border: 0.5px solid $borderColor;
    }
  }

  img {
    display: block;
    object-fit: fill;
    margin-bottom: 15px;
    height: 350px;
    width: 100%;
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 5px;
    cursor: pointer;
  }

  &__title {
    font-size: 1.75rem;
    cursor: pointer;
  }

  &__date {
    font-size: 1rem;
    margin-top: 15px;
  }
}
</style>
