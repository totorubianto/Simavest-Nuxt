<template>
  <div>
    <Hero/>
    <div class="container">
      <div class="columns">
        <div class="column is-4">
            <CardMenu />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/dashboard/hero";
import CardMenu from "@/components/tabungan/card_menu";
export default {
  layout: "default",
  components: {
    Hero,
    CardMenu,
  }
};
</script>

<style>
</style>
