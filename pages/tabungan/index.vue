<template>
  <div>
    <Hero/>
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <div class="card is-half">
            <div class="card-image">
              <figure class="image is-128x128">
                <img src="https://bulma.io/images/placeholders/256x256.png">
              </figure>
              <div class="card-content has-text-centered">
                <h5 class="title is-5">Saldo Utama</h5>
                <p class="subtitle is-5">
                  Lihat saldo utama anda dan cek
                  histori mutasi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/dashboard/hero";
export default {
  layout: "default",
  components: {
    Hero
  }
};
</script>

<style>
</style>
