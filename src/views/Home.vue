<template>
  <main>
    <section class="index">
      <img
        class="index__hero"
        src="@/assets/images/drawings/heroImg.png"
        alt="Character art"
      />
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.index {
  height: 100vh;
  &__hero {
    object-fit: contain;
    height: 100vh;
    width: 80vw;
    filter: drop-shadow(30px 15px 4px $tertiaryColor);
  }
}

@include for-phones {
  .index {
    &__hero {
      width: 100vw;
    }
  }
}
</style>
