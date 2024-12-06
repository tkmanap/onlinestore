<script setup>
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <div class="content">
    <h3>По популярности</h3>
    <div class="sort_container">
      <div class="sort">
        <div>
          <input>
        </div>
        <div>
          <div>
            <h3 class="sort_name">Встроенная память</h3>
          </div>
          <div class="sort_input">
            <input type="checkbox">
            <h4 class="input_item_name">512</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="products">
      <ProductCard/>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  gap: 75px;
  margin-top: 24px;
}

.sort_container {
  width: 290px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.1);
  background: #f6f6f6;
  border-radius: 8px;
}

.sort {
  width: 257px;
}

.sort_name {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 16px;
}

.sort_input {
  display: flex;
  align-items: center;
  text-align: center;
}

.input_item_name {
  font-weight: 300;
  font-size: 14px;
  margin-left: 8px;
}
</style>