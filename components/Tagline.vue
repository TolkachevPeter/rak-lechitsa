<template>
  <div class="tagline">
    <slot></slot>
  </div>
</template>

<style scoped>
.tagline {
  min-height: 86px;
  background: #613a93;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-family: Inter;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
}

@media (min-width: 1280px) {
  .tagline {
    font-size: 28px;
  }
}
@media (min-width: 1024px) {
  .tagline {
    min-height: 80px;
    font-size: 24px;
    line-height: 40px;
  }
}
@media (min-width: 768px) {
  .tagline {
    font-size: 22px;
    line-height: 36px;
  }
}
@media (min-width: 320px) {
  .tagline {
    font-size: 16px;
    line-height: 18px;
  }
}
</style>
