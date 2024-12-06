<script setup>

</script>

<template>
  <div class="card">
    <div class="card_slider">
      <img src="../assets/img/produce-p1.png" alt="produce-photo">
      <h4>...</h4>
      <h2 class="card_title">
        Смартфон Apple iPhone 14 128GB
      </h2>
    </div>
    <h3 class="card_price">
      84 999 ₽
    </h3>
    <div class="in_case">
      <p class="in_case_title">В наличии</p>
      <button class="like">
      </button>
    </div>
    <button class="basket-button">В корзину</button>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 217px;
  height: 531px;
}

.card_slider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 169px;
}

.card_title {
  margin-top: 20px;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
}

.in_case {
  display: flex;
  margin: 12px 0;
  justify-content: space-between;
  width: 165px;
  height: 40px;
  align-items: center;
}

.card_price {
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 16px;
}

.basket-button {
  border-radius: 8px;
  padding: 10px 16px;
  width: 164px;
  height: 44px;
  background-color: #091d9e;
  font-weight: 500;
  font-size: 14px;
  color: #f6f6f6;
  border: none;
}

.in_case_title{
  font-weight: 300;
  font-size: 14px;
  color: #169b00
}

.like {
  background: url("../assets/img/like.png") no-repeat center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: none;
}

.like:hover {
  background-color: red;
}
</style>
