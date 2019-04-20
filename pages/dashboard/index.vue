<template>
  <div>
    <div class="columns is-multiline">
            <div class="column is-4">
              <Card/>
            </div>
            <div class="column is-4">
              <Card/>
            </div>
            <div class="column is-4">
              <Card/>
            </div>
            <div class="column is-4">
              <Card/>
            </div>
          </div>
  </div>
</template>

<script>
import Card from "@/components/dashboard/card";
export default {
  layout: "dashboard",
  components: {
    Card,
  }
};
</script>
