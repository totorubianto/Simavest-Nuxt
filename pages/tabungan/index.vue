<template>
  <div>
    <Hero/>
    <div class="container relative top-300">
      <div class="columns">
        <div class="column is-4">
          <CardMenu/>
        </div>
        <div class="column is-4">
          <CardMenu/>
        </div>
        <div class="column is-4">
          <CardMenu/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/tabungan/tabunganImpian/hero";
import CardMenu from "@/components/tabungan/card_menu";
export default {
  data() {
    return { imageUrl: require('~/assets/img/icons/kebutuhan.svg')}
  },
  components: {
    Hero,
    CardMenu
  }
};
</script>

<style>
</style>
