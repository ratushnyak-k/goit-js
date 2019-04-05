<template>
  <SignInForm :onSubmitForm="onSubmitChild"></SignInForm>
</template>

<script>
  import SignInForm from '@/components/SignInForm';
  export default {
    components: {
      SignInForm
    },
    methods: {
      onSubmitChild(data) {
        console.log(data);
      }
    }
  }
</script>