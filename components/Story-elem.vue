<template>
    <section class="stories">
    <h2 class="stories__header">Истории неизлечимых привычек</h2>
    <div class="stories-list">
      <div class="story-element">
        <img class="story-element__photo" src="" alt="Фото человека с историей">
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text">Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.</span>
      </div>
      <div class="story-element">
        <img class="story-element__photo" src="" alt="Фото человека с историей">
        <span class="story-element__name">Владимир Познер</span>
        <span class="story-element__text">Я боюсь акул — и, в отличии от рака, это не лечится.</span>
      </div>
      <div class="story-element">
        <img class="story-element__photo" src="" alt="Фото человека с историей">
        <span class="story-element__name">Александр Тарханов</span>
        <span class="story-element__text">Я не могу победить свою пунктуальность в отличии от рака.</span>
      </div>
      <div class="story-element">
        <img class="story-element__photo" src="" alt="Фото человека с историей">
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text">Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.</span>
      </div>
      <div class="story-element">
        <img class="story-element__photo" src="" alt="Фото человека с историей">
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text">Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.</span>
      </div>
      <div class="story-element">
        <img class="story-element__photo" src="" alt="Фото человека с историей">
        <span class="story-element__name">Владимир Познер</span>
        <span class="story-element__text">Я боюсь акул — и, в отличии от рака, это не лечится.</span>
      </div>
      <div class="story-element">
        <img class="story-element__photo" src="" alt="Фото человека с историей">
        <span class="story-element__name">Александр Тарханов</span>
        <span class="story-element__text">Я не могу победить свою пунктуальность в отличии от рака.</span>
      </div>
      <div class="story-element">
        <img class="story-element__photo" src="" alt="Фото человека с историей">
        <span class="story-element__name">Владимир Тен</span>
        <span class="story-element__text">Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.</span>
      </div>
    </div>

  </section>
</template>

<script>
    export default {
        
    }
</script>
   
<style  scoped>
     .stories {
    padding: 0 60px;
    background-color: #FFFFFF;
    /* display: flex;
    flex-direction: column; */
    justify-content: space-between;
    max-width: 1320px;

}

.story-element {
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
    
}
.story-element__photo {
    width: 300px;
    height: 300px;
    background-color: #EDEDED;
}

.stories__header {
    max-width: 413px;
    max-height: 72px;
    color: #000000;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
}
.stories-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    

}

.story-element__name {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    color: #000000;

}
    
</style>