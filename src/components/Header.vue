<template>
  <main>
    <section class="header">
      <header>
        <div class="header__title">Aaron Christopher's Galerie</div>
      </header>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 50px;
  background-color: $secondaryColor;
  color: #f7f7f7;

  &__title {
    font-size: 1.5rem;
    font-weight: 500;
  }
}
</style>
