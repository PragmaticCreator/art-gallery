<template>
  <main>
    <section class="post">
      <header class="post__title">
        <span> {{ post.title.rendered }} </span>
      </header>

      <article class="post__content">
        <div v-html="post.content.rendered" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      postId: this.$route.params.postId,
      post: {},
    };
  },
  created() {
    fetch(`${this.$api}/${this.postId}`)
      .then((request) => request.json())
      .then((data) => {
        this.post = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.post {
  font-family: 'Montserrat';

  &__title {
    text-align: center;
    span {
      font-size: 2rem;
    }
    margin-bottom: 30px;
  }

  &__content {
    img {
      object-fit: fill;
      height: 400px;
      width: 280px;
    }

    ::v-deep div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 20px;
      h1 {
        font-size: 2.5rem;
      }
      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1.75rem;
      }
      h4 {
        font-size: 1.5rem;
      }
      h5 {
        font-size: 1.25rem;
      }
      h6 {
        font-size: 1rem;
      }

      h1,h2,h3,h4,h5,h6 {
        margin: 20px 0;
      }

      p {
        color: $secondaryColor;
        font-size: 1.125rem;
        margin-bottom: 30px;
      }

      a {
        text-decoration: none;
        color: $tertiaryColor;
        font-weight: bold;
        transition: color 300ms ease-in-out;

        &:hover {
          color: $fontColor;
        }
      }

      img {
        width: 100%;
        max-width: 500px;
        height: auto;
        object-fit: fill;
        margin-bottom: 30px;
        border-radius: 5px;
      }
    }
  }
}
</style>
