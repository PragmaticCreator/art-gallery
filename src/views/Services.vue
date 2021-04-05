<template>
  <main>
    <section class="services">
      <!-- Service A -->
      <p>
        Identifying Suitable artwork for clients by helping them choose art for
        their specific needs.
      </p>
      <img
        class="services__image-right"
        src="@/assets/images/noMasks.jpg"
        alt="Tailored artwork"
      />

      <!-- Service B -->
      <img src="@/assets/images/aaronChristopher.jpg" alt="Art by Aaron Christopher" />
      <p>
        Production of art for private homes as art breathes life into a home.
        Helping clients surround themselves with art they can relate to.
      </p>

      <!-- Service C -->
      <p>
        Artist branding to help create a brand new platform for others to share
        their creativity.
      </p>
      <img
        class="services__image-right"
        src="@/assets/images/ameliaBrown.jpg"
        alt="Art by Amelia Brown"
      />

      <!-- Service D -->
      <img src="@/assets/images/artExhibition.jpg" alt="Photo by Dannie Jing" />
      <p>
        Exhibition opportunities for upcomming aspiring artists to showcase
        their creativity and talent.
      </p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.services {
  font-family: 'Montserrat';
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 90px;
  row-gap: 100px;

  &__image-right {
    justify-self: right;
  }

  p {
    font-size: 1.75rem;
    font-weight: 500;
  }

  img {
    border-radius: 5px;
    object-fit: fill;
    height: 450px;
    width: 400px;
  }
}
</style>
