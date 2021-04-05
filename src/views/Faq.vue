<template>
  <main>
    <section class="faq">
      <header class="faq__title">
        <span>Frequently Asked Questions (FAQ)</span>
      </header>

      <article>
        <div>
          <span>Q.</span> Who operates the exhibition on aaron's galerie?
        </div>
        <p>
          <span>A.</span> All exhibitions for upcomming artists are personally
          conducted by me, aaron fernandes.
        </p>
      </article>
      <article>
        <div><span>Q.</span> How do we contact the gallery?</div>
        <p>
          <span>A.</span> I can be contacted on my phone or email.
          (+91)(9689114682), monday-saturday from 10:00am - 10:00pm IST.
        </p>
      </article>
      <article>
        <div><span>Q.</span> Does your art gallery promote art?</div>
        <p>
          <span>A.</span> Yes, i do have monthly art exhibitions which are
          catalogued and retained in the gallery's archives.
        </p>
      </article>
      <article>
        <div><span>Q.</span> Can we follow the gallery on social media?</div>
        <p>
          <span>A.</span> yes, you can follow the it on instagram, pinterest and
          youtube.
        </p>
      </article>
      <article>
        <div>
          <span>Q.</span> Are there any opportunities for solo art exhibitors?
        </div>
        <p>
          <span>A.</span> Yes, i do have a "Solo Art Series" that offers
          emerging artists the opportunity to showcase their artwork.
        </p>
      </article>
      <article>
        <div><span>Q.</span> Is there any entry charge?</div>
        <p>
          <span>A.</span> Admission is free. However, on occasion, there will be
          an admission charge for special exhibitions at a minimal fee.
        </p>
      </article>
      <article>
        <div><span>Q.</span> Can the gallery repair an artwork that i own?</div>
        <p>
          <span>A.</span> No, the gallery cannot advise or repair your work.
        </p>
      </article>
      <article>
        <div><span>Q.</span> Does the gallery conduct workshops?</div>
        <p><span>A.</span> No, the gallery does not conduct workshops.</p>
      </article>
      <article>
        <div><span>Q.</span> Can i reserve any artwork i like?</div>
        <p>
          <span>A.</span> Unfortunately, we do not provide the facility of
          online purchases.
        </p>
      </article>
      <article>
        <div>
          <span>Q.</span> As a fellow artist, would you help me display and sell
          my paintings?
        </div>
        <p>
          <span>A.</span> The core motive of aaron's galerie is to support and
          promote young emerging artist. Even if i don't sell your work, full
          guidance will be provided in case of any querries and you shall be
          informed accordingly.
        </p>
      </article>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.faq {
  &__title {
    font-size: 2.625rem;
    text-align: center;
  }

  article {
    border: 0.5px solid $borderColor;
    margin: 50px 0;

    div {
      display: flex;
      align-items: center;
      font-size: 1.375rem;
      font-weight: 500;
      border-bottom: 0.5px solid $borderColor;
      padding: 20px 10px;
      background-color: $secondaryColor;
      color: $primaryColor;

      & > span {
        color: $tertiaryColor;
        position: relative;
        font-size: 2rem;
        font-weight: bold;
        margin-right: 10px;

        &::before {
          position: absolute;
          content: '';
          background-color: $tertiaryColor;
          top: -21px;
          left: -11px;
          width: 4px;
          height: 85px;
        }
      }
    }

    p {
      display: flex;
      align-items: center;
      font-size: 1.0625rem;
      padding: 20px 10px;
      & > span {
        color: $secondaryColor;
        position: relative;
        font-size: 2rem;
        font-weight: bold;
        margin-right: 10px;

        &::before {
          position: absolute;
          content: '';
          background-color: $secondaryColor;       
          top: -20px;
          left: -11px;
          width: 4px;
          height: 84px;
        }
      }
    }
  }
}
</style>
