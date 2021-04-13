<template>
  <main>
    <section class="about">
      <img class="about__avatar" src="@/assets/images/services/avatar.jpg" alt="avatar">
      <p class="about__content">
        <strong>Aaron's galerie</strong> is an independently owned art studio based in goa, india, focused on user-driven outcomes. 
        <br>I appreciate all kinds of art. This includes music, drawings, coding and even boxing.
        <br>For any purchase of custom sketches,
        <br>Call me : (+91) 9689114682
        <br>Monday-Saturday | 10:00am-10:00pm | IST
      </p>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about {
  font-family: $fontAccent;
  display: flex ;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__avatar {
    object-fit: fill;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin-bottom: 30px;
  }

  &__content {
    font-size: 1.125rem;
    line-height: 2em;
  }
}
</style>
