<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="answertext"
    :required="required"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
  />
  <!--@input="$emit('input', $event.target.value)" -->
</template>

<script>
export default {
  props: ['type', 'placeholder', 'answertext', 'required', 'value'],
};
</script>

<style scoped></style>
