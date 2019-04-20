<template>
  <div>
    <Navbar/>
    <Hero />
    

    <nuxt/>
  </div>
</template>

<script>
import Navbar from "@/components/core/Navbar";
import Hero from "@/components/dashboard/hero";
import Card from "@/components/dashboard/card";
export default {
  components: {
    Navbar,
    Hero,
    Card
  }
};
</script>
