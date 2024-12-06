<script>
import Slider from "@/components/Slider.vue";
import Catalog from "@/components/Catalog.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: 'MainPage',
  components: {ProductCard, Catalog, Slider}
}
</script>

<template>
  <div class="main">
    <Slider/>
    <Catalog/>
  </div>
  <div>
    <ProductCard/>
  </div>
</template>
