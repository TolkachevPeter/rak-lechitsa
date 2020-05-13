<template>
  <div class="container">
    <sectiontitle
      >Здесь будет страница об одной истории, например: Александр Тарханов: «Я
      не могу победить свою пунктуальность в отличии от рака»</sectiontitle
    >
  </div>
</template>

<script>
import SectionTitle from '@/components/ui/SectionTitle';

export default {
  components: {
    sectiontitle: SectionTitle,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  padding: 200px;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
