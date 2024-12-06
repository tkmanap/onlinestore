<script>
export default {
  name: "Slider",
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          title: "Умная колонка",
          subtitle: "СКИДКА 30% при покупке второго товара",
        },
        {
          title: "iphone",
          subtitle: "СКИДКА 20% при покупке второго товара",
        },

      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
          (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>


<template>
  <div class="slider">
    <button class="arrow_left" @click="prevSlide">
    </button>
    <div class="slide" v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index">
      <h2>{{ slide.title }}</h2>
      <p>{{ slide.subtitle }}</p>
    </div>
    <button class="arrow_right" @click="nextSlide"></button>
  </div>
</template>


<style scoped>
.slider {
  display: flex;
  position: relative;
  height: 260px;
  margin-top: 40px;
  background: rgb(12, 12, 12);
  color: white;
  justify-content: space-between;
}

.arrow_left{
  background: url("../assets/img/leftArrow.png") no-repeat center left ;
  width: 60px;
  margin-left: 25px;
}
.arrow_right {
  background: url("../assets/img/rightArrow.png") no-repeat center right;
  width: 60px;
  margin-right: 25px;
}
</style>
