<script>
export default {
  name: 'AppHeader',
  props: {
    title: {
      type: String
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<template>
  <div class="header">
    <i
      class="fas fa-chevron-left back"
      @click="back"
    />
    <span class="header__title">{{ title }}</span>
  </div>
</template>

<style lang="scss" scoped>
.header {
  font-family: 'arista-20-regular';
  font-size: 2rem;
  width: 100%;
  // color: #606060;
  color: white;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  margin-bottom: 0.8em;
  text-align: center;
  background: linear-gradient(135deg, #BFEBFF, #48B6FF);
  box-shadow: 15px 19px 32px -18px rgba(21, 19, 19, 0.07);

  .back {
    position: absolute;
    left: 1em;
    top: 0.9em;
    font-size: 0.8em;
    vertical-align: middle;
  }
}
</style>
