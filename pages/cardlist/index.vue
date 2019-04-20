<template>
  <div>
    <div class="card is-horizontal">
      <div class="columns">
        <div class="column is-3">
          <div class="card-image">
            <figure class="image is-128x128">
              <img class="width-100" src="https://bulma.io/images/placeholders/256x256.png">
            </figure>
          </div>
        </div>
        <div class="column">
          <div class="card-content">
            <h5 class="title is-6">Green Taman Sutra</h5>
            <p class="is-size-6 is-vertical-center">
              <span class="padding-right-11">
                <img src="~assets/img/icons/location.svg" alt="loct">
              </span>
              Jakarta Barat, Jl Angsana III
            </p>
            <p class="is-size-6">
              <span class="padding-right-11">
                <img src="~assets/img/icons/store.svg" alt="store">
              </span>
              Rumah
            </p>
            <p class="is-size-6">
              <span class="padding-right-8">
                <img src="~assets/img/icons/discount.svg" alt="disc">
              </span>
              Keuntungan 15%
            </p>
            <div class="progress-wrapper padding-top-22">
              <progress class="progress is-danger is-small" value="90" max="100">90%</progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard"
};
</script>

<style scoped>
.card .media:not(:last-child) {
  margin-bottom: 0.75rem;
}
.card.card--reverse-order {
  flex-direction: row-reverse;
}
.card.is-horizontal {
  display: flex;
  flex-basis: 50ex;
  flex-grow: 0;
  flex-shrink: 1;
}
.card.is-horizontal .card-image {
  flex: 4;
  flex-shrink: 1;
}
.card.is-horizontal .card-image .image {
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
.card.is-horizontal .card-image .image img {
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.card.is-horizontal .card-content {
  flex: 3;
}
</style>
