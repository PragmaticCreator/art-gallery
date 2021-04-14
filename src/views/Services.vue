<template>
  <main>
    <section class="services">
      <!-- Service A -->
      <p>
        Identifying Suitable artwork for clients by helping them choose art for
        their specific needs.
      </p>
      <img
        loading="lazy"
        src="@/assets/images/services/noMasks.jpg"
        alt="Tailored artwork"
      />

      <!-- Service B -->
      <img
        loading="lazy"
        src="@/assets/images/services/aaronChristopher.jpg"
        alt="Art by Aaron Christopher"
      />
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
        loading="lazy"
        src="@/assets/images/services/ameliaBrown.jpg"
        alt="Art by Amelia Brown"
      />

      <!-- Service D -->
      <img
        loading="lazy"
        src="@/assets/images/services/artExhibition.jpg"
        alt="Photo by Dannie Jing"
      />
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
  font-family: $fontAccent;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 5vw;
  row-gap: 50px;
  column-gap: 30px;

  p {
    font-size: 1.75rem;
    font-weight: 500;
  }

  img {
    justify-self: center;
    border-radius: 5px;
    object-fit: fill;
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 350px;
  }
}
</style>
