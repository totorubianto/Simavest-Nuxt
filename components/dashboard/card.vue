<template>
    <div>
        
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="~assets/img/home1.jpg" alt="Placeholder image">
                  </figure>
                </div>
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
                  <p class="title has-text-grey padding-top-8 is-6">Terkumpul</p>
                  <p class="subtitle is-6">Rp. 50.230.000</p>
                  <div class="control margin-top-22">
                    <nuxt-link  class="button is-danger is-fullwidth is-outlined" to="dashboard/:id">Invest</nuxt-link>
                   
                  </div>
                </div>
              </div>
            
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
