<template>
  <form class="md-layout" @submit.prevent="submit">
    <md-field>
      <label>Initial Value</label>
      <md-input v-model="initial"></md-input>
    </md-field>
  </form>
</template>

<script>
export default {
  name: 'SignInForm',
  props: {
    onSubmitForm: {
      type: Function,
      require: true,
    },
  },
  data: () => ({
    initial: '',
  }),
  methods: {
    submit() {
      this.onSubmitForm({ value: this.initial });
    },
  },
};
</script>
