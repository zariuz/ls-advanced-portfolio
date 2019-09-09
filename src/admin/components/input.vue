<template lang="pug">
  .login__input  
    label(:for="icon").input__label.section__label(v-if="title") {{title}}
    .form__input
      input(:type="type" :id="icon" name="fullname" required).input.input__login(
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      )
      .form__input-icon(
        :class="`form__input-icon_${icon}`"
      )
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    value: String | Number,
    icon: {
      type: String,
      default: ''
    }
  }
};
</script>
