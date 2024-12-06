<script>
export default {
  name: 'Catalog'
}
</script>

<template>
  <div class="catalog">
    <h1 class="catalog_name">Каталог</h1>
    <div class="catalog_description">
      <RouterLink to="/catalog" class="catalog_card">
        <div class="catalog_card_body">
          <img class="catalog_card_img" src="../assets/img/iphone1.png" alt="card-image">
        </div>
        <h3 class="catalog_card_title">iphone</h3>
      </RouterLink>
      <div class="catalog_card">
        <div class="catalog_card_body">
          <img class="catalog_card_img" src="../assets/img/laptop.png" alt="card-image">
        </div>
        <h3 class="catalog_card_title">laptop</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  margin-top: 40px;
}

.catalog_name {
  font-weight: 400;
  font-size: 32px;
  color: #0c0c0c;
  margin-bottom: 28px;
}

.catalog_description {
  display: flex;
  gap: 16px;
}

.catalog_card:hover {
  transform: translateY(-10px);
}

.catalog_card_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 200px;
  height: 211px;
  background-color: #bcc5ff;
}

.catalog_card_title {
  text-align: center;
  margin-top: 12px;
  font-weight: 300;
  font-size: 20px;
  color: #000;
}
</style>