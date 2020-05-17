<template>
  <div>
    <layout />
    <popup />
  </div>
</template>

<script>
import ContactPopup from '@/components/ContactsPopup';
import PopupLayout from '@/components/PopupLayout';
export default {
  components: {
    popup: ContactPopup,
    layout: PopupLayout,
  },
};
</script>

<style lang="scss" scoped></style>
