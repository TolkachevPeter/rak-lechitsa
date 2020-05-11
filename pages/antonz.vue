<template>
  <div>
    <popup-layout />
    <popup />
  </div>
</template>

<script>
import PopupLayout from '../components/PopupLayout';
import Popup from '../components/Popup';
export default {
  components: {
    'popup-layout': PopupLayout,
    popup: Popup,
  },
};
</script>

<style scoped></style>
