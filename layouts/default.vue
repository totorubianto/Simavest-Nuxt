<template>
  <div>
    <Navbar/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
