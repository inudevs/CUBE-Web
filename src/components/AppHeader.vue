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
  width: 100%;
  color: #606060;
  margin-top: 1.5em;
  margin-bottom: 2em;
  text-align: center;

  .back {
    position: absolute;
    left: 1.5em;
  }
}
</style>
