<template>
  <div>
    <div class="card margin-0 padding-0">
      <div class="card-content margin-0 padding-0">
        <div class="columns margin-0 padding-0">
        <div
          class="column is-3"
          :style="{ backgroundImage: 'url(' + require('@/assets/img/home1.jpg') + ')' }"
        >
        </div>
        <div class="column is-5">
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
          </div>
        </div>
        <div class="column is-4">
          <div class="card-content">
            <div class="progress-wrapper">
              <progress class="progress is-danger is-small" value="90" max="100">90%</progress>
            </div>
            <p class="title has-text-grey padding-top-8 is-6">Terkumpul</p>
            <p class="subtitle is-6">Rp. 50.230.000</p>
            <div class="control margin-top-22">
              <nuxt-link class="button is-danger is-fullwidth is-outlined" to="dashboard/:id">Invest</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data() {
    return {
      page: {
        image: "toto.png"
      }
    };
  }
};
</script>

<style scoped>
.margin-0{
  margin: 0px !important;
}
.padding-0{
  padding: 0px !important;
}
</style>
