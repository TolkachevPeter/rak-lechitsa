<template>
  <div class="container">
    <sectiontitle>Истории неизлечимых привычек</sectiontitle>
    <linkbutton :url="'1'" class="linkbutton_stories"
      >Cсылка на историю 1</linkbutton
    >
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';
import Linkbutton from '@/components/ui/Link-button';

export default {
  components: {
    sectiontitle: SectionTitle,
    linkbutton: Linkbutton,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  padding: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.linkbutton_stories {
  background: white;
}
</style>
