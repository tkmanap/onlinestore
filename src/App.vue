<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="header">
    <NavBar/>
  </div>
  <div class="container">
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 1280px;
  margin: 0 auto;
}

.header {
  margin-bottom: 48px;
  border-bottom: 1px solid red;
}

</style>