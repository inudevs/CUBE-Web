<script>
export default {
  name: 'AppTitle',
  props: {
    title: {
      type: String,
      default: 'CUBE'
    }
  }
}
</script>

<template>
  <div class="header">
    <span class="header__title">{{ title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.header {
  font-family: 'arista-20-regular';
  width: 100%;
  // color: #606060;
  color: white;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-bottom: 0.38em;
  text-align: center;
  font-size: 2rem;
  background: linear-gradient(135deg, #BFEBFF, #48B6FF);
  box-shadow: 15px 19px 32px -18px rgba(21, 19, 19, 0.07);
}
</style>
