<template>
  <div>
    <div class="sandvich" v-if="sandichShow" @click="$emit('click')">
      <div class="sandvich__block"></div>
      <div class="sandvich__block"></div>
      <div class="sandvich__block"></div>
    </div>
    <div class="cross" v-if="crossShow" @click="$emit('click')">
      <div class="cross__axis"></div>
      <div class="cross__axis cross__axis_reverse"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sandichShow', 'crossShow'],
};
</script>

<style scoped>
.sandvich {
  width: 32px;
  cursor: pointer;
}
.sandvich__block {
  width: 100%;
  border-top: 3px solid #000000;
  padding-bottom: 10px;
}
.sandvich__block:last-child {
  padding-bottom: 0;
}

.cross {
  width: 25px;
  height: 25px;
  position: relative;
  cursor: pointer;
}
.cross__axis {
  width: 32px;
  border-top: 3px solid #000000;
  transform: rotate(-135deg);
  top: 10px;
  left: -3px;
  position: absolute;
}

.cross__axis_reverse {
  transform: rotate(-45deg);
}
</style>
