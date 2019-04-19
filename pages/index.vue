<template>
  <section class="section">
    <nuxt-link to="login">login</nuxt-link>
    <nuxt-link to="signup">signup</nuxt-link>
  </section>
</template>

<script>
import BLogo from '@/components/Logo'

export default {
  transition: 'fade',
  name: 'HomePage',
}
</script>
