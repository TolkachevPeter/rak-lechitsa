<template>
  <div>
    <div :class="['modal-window']" v-if="getPopupState">
      <slot></slot>
    </div>
    <overlay v-if="getPopupState" @overlayClick="$emit('overlayClick')" />
  </div>
</template>

<script>
import Overlay from '@/components/Overlay';

export default {
  components: {
    overlay: Overlay,
  },
  methods: {
    showPopup() {
      this.$store.commit('popup/togglePopupState');
      this.$store.commit('popup/toggleSocLinksPopup');
      this.$store.commit('popup/toggleQiuzPopup');
    },
  },
  computed: {
    getPopupState() {
      return this.$store.getters['popup/getPopupState'];
    },
  },
};
</script>

<style scoped></style>
