<template>
  <main>
    <section>
      <img class="index__hero" src="@/assets/drawings/heroImg.png" alt="Character art">
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.index{
  &__hero{ 
    margin-top: -2em; // This is because dashboard has a m-top of 2em.
    object-fit: contain;
    height: 100vh;
    width: 80vw;
    background-color: $primaryColor; 
  }
}

</style>