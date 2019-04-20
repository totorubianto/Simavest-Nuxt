<template>
  <div>
    <Hero/>
    <div class="container relative top-300" style="margin-bottom:600px;">
      <div class="columns">
        <div class="column is-4">
          <nuxt-link id="saldo" to="saldo"><CardMenuSaldo /></nuxt-link>
        </div>
        <div class="column is-4">
          <nuxt-link id="needs" to="needs"><CardMenuNeeds /></nuxt-link>
        </div>
        <div class="column is-4">
          <nuxt-link id="needs" to="dream"><CardMenuDream /></nuxt-link>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Hero from "@/components/tabungan/tabunganImpian/hero";
import CardMenuSaldo from "@/components/tabungan/card_menu_saldo";
import CardMenuNeeds from "@/components/tabungan/card_menu_needs";
import CardMenuDream from "@/components/tabungan/card_menu_dream";
export default {
  
  components: {
    Hero,
    CardMenuSaldo,
    CardMenuNeeds,
    CardMenuDream
  }
};
</script>

<style>
</style>
