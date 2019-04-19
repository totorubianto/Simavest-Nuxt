<template>
  <div>
    <Navbar/>
    <Hero/>
    
    <nuxt/>
  </div>
</template>

<script>
import Navbar from "@/components/core/Navbar";
import Hero from "@/components/dashboard/hero";
export default {
  components: {
    Navbar,
    Hero
  }
};
</script>
