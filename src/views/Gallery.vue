<template>
  <main>
    <section class="gallery">
      <!-- Zoom in on selected image -->
      <transition name="gallery__view">
        <div
          class="gallery__modal"
          v-if="selectedImage"
          @click="selectedImage = null"
        >
          <img
            :src="require(`@/assets/drawings/${selectedImage}.jpg`)"
            :alt="selectedImage"
            @click="selectedImage = null"
          />
        </div>
      </transition>

      <!-- Displaying all images -->
      <div class="gallery__posts">
        <div
          class="gallery__posts-content"
          v-for="(image, index) in images"
          :key="index"
        >
          <img
            :src="require(`@/assets/drawings/${image.imageName}.jpg`)"
            :alt="image.artist"
            @click="zoomImage(image.imageName)"
          />
          <span> {{ image.artist }} </span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Gallery',
  components: {},
  data() {
    return {
      selectedImage: null,
      images: [
        {
          imageName: 'girlBun',
          artist: 'Aaron Fernandes',
        },
        {
          imageName: 'ameliaBrown',
          artist: 'Amelia Brown',
        },
        {
          imageName: 'mangaGirl',
          artist: 'Aaron Fernandes',
        },
        {
          imageName: 'boogiepop',
          artist: 'Aaron Fernandes',
        },
        {
          imageName: 'huntress',
          artist: 'Aaron Fernandes',
        },
      ],
    };
  },
  methods: {
    zoomImage(imageName) {
      this.selectedImage = imageName;
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  &__view {
    &-enter-active,
    &-leave-active {
      transition: opacity 500ms;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }

  &__modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: rgb(0, 0, 0, 0.85);

    img {
      object-fit: contain;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 90vh;
      width: 90vh;
      margin: auto;
    }
  }

  &__posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    text-align: center;
    row-gap: 50px;

    &-content {
      img {
        display: block;
        height: 350px;
        width: 280px;
        object-fit: fill;

        border: 2px solid $borderColor;
        border-radius: 8px;
        margin-bottom: 10px;
        transition: transform 300ms ease-in-out;
        cursor: pointer;

        &:hover {
          transform: scale(105%, 105%);
        }
      }

      span {
        font-family: 'Montserrat';
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }
}
</style>
