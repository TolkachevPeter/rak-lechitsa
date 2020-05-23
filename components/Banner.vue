<template>
  <section class="banner">
    <h1 class="title banner-title">#РАКЛЕЧИТСЯ</h1>
    <banner__arrow />
  </section>
</template>

<script>
import DownArrow from './ui/DownArrow';
export default {
  components: {
    banner__arrow: DownArrow,
  },
  // methods: {
  //   testClick() {
  //     // this.$refs["input"].focus()
  //     //this.$refs['button'].focus;
  //     // console.log(this.$refs['button'].focus);
  //     console.log(this.$refs);
  //   },
  // },
};
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 92px;
  line-height: 111px;
  text-transform: uppercase;
}

.banner {
  width: 100%;
  min-height: 689px;
  background-color: #613a93;
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  align-items: center;
  justify-content: center;
  position: relative;
}
.banner-title {
  color: #ffffff;
  /* margin-top: 290px; */
  text-align: center;
}
@media (max-width: 1280px) {
  .title {
    font-size: 78px;
    line-height: 94px;
  }
  .banner {
    min-height: 620px;
  }
}
@media (max-width: 1024px) {
  .banner {
    min-height: 540px;
  }
}
@media (max-width: 768px) {
  .title {
    font-size: 64px;
    line-height: 77px;
  }
  .banner {
    min-height: 780px;
  }
}
@media (max-width: 720px) {
  .title {
    font-size: 36px;
    line-height: 44px;
  }
  .banner {
    min-height: 480px;
  }
}
</style>
