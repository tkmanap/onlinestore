<script setup>

import Breadcrumb from "@/components/Breadcrumb.vue";
</script>

<template>
  <Breadcrumb/>
  <div>
    <div class="product_description">
      <div>
        <img class="product_img" src="../assets/img/product_img1.png" alt="product_img">
      </div>
      <div class="product_features">
        <h1>Смартфон Apple iPhone 13 128GB</h1>
        <p>Цвет: Белый</p>
        <img src="../assets/img/color-red.png" alt="color">
        <h4>Характеристики:</h4>
        <p>Экран: 6.1"/2532x1170</p>
        <button>Все характеристики</button>
      </div>
      <div class="product_price">
        <h2 class="product_price_name">75 999 ₽</h2>
        <button class="product_price_button">В корзину</button>
      </div>
    </div>
    <div class="reviews">
      <h3 class="reviews_title">Отзывы</h3>
      <div>
        <p>1325 отзывов</p>
        <p>2000 оценок</p>
      </div>
      <div>
        <img src="../assets/img/reviews.jpg" alt="reviews-img">
      </div>
    </div>


    <div class="reviews_description">
      <div class="reviews_mid_price">4$$$$</div>
      <div class="reviews_slider">
        <div class="reviews_card">
          <div class="reviews_card_container">
            <div class="profile">
              <img src="../assets/img/profile1.png" alt="profile-img">
              <h4 class="profile-name">Хомяк</h4>
              <p>25.07</p>
            </div>
            <div class="reviews_plus">
              <p>Плюсы: Очень красивый, удобно пользоваться</p>
              <p>Минусы: Нет</p>
              <button>Читать полностью</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.product_description {
  display: flex;
  justify-content: space-between;
}

.product_features {
  width: 354px;
}

.product_price {
  width: 279px;
  height: 185px;
  background: #e7e7ed;
  border-radius: 8px;
}

.product_price_name {
  margin: 40px 0 28px 40px;
}

.product_price_button {
  border-radius: 8px;
  padding: 10px 16px;
  width: 199px;
  height: 49px;
  background-color: #091d9e;
  font-weight: 500;
  font-size: 14px;
  color: #f6f6f6;
  border: none;
  margin-left: 40px;
}



.reviews_description{
  height: 351px;
  background-color: #bcc5ff;
}

.reviews_slider{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: rwow;
  margin-top: 16px;
}

.reviews_card {
  border-radius: 8px;
  width: 268px;
  height: 262px;
  background-color: #f6f6f6;
}

.reviews_card_container {
  width: 151px;
  padding-right: 18px;
  padding-bottom: 24px;
}

.profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 23px;
}
</style>