<script>
export default {
  name: 'NavBar'
}
</script>


<template>
    <div class="navbar">
      <nav class="navbar_container">
        <RouterLink class="logo" to="/">
          <img src="../assets/img/logo.png" alt="logo">
        </RouterLink>
        <input class="search" type="text" placeholder="Поиск"/>
        <ul class="menu_list" cursor-default="auto">
          <li class="menu_list__item">
            <img class="item_img" src="../assets/img/category.png" alt="category">
            <RouterLink class="item_name" to="/catalog">Католог</RouterLink>
          </li>
          <li class="menu_list__item">
            <img class="item_img" src="../assets/img/basket.png" alt="basket">
            <p class="item_name">Корзинка</p>
          </li>
          <li class="menu_list__item">
            <img class="item_img" src="../assets/img/profile.png" alt="profile">
            <p class="item_name">Профиль</p>
          </li>
        </ul>
      </nav>
    </div>
</template>

<style scoped>

.navbar_container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 20px auto 20px;
  height: 46px;
}
.search {
  width: 754px;
  height: 40px;
  border-radius: 8px;
  background: url('../assets/img/search.png') no-repeat center left 16px #dedede;
  padding-left: 46px;
  border: none;
}

.search::placeholder {
  margin-left: 16px;
}

.menu_list {
  display: flex;
  align-items: center;
  gap: 32px;
}

.menu_list__item {
  cursor: pointer;
}

.item_img {
  margin-left: 13px;
}

.item_name {
  font-size: 14px;
  color: #454545;
  margin-top: 8px;
}
</style>