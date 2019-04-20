<template>
  <div class="card is-half">
    <div class="card-image">
      <figure class="image is-128x128 has-image-centered padding-top-22">
        <img :src="'{{ imageUrl }}'">
      </figure>
      <div class="card-content has-text-centered">
        <p class="title is-5 has-text-pink">Saldo Utama</p>
        <p class="subtitle is-6">
          Lihat saldo utama anda dan cek
          histori mutasi
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// var imageUrl = require('~/assets/img/icons/kebutuhan.svg')
export default {
  props: [
    'imageUrl'
  ]
}
</script>

<style>
</style>
