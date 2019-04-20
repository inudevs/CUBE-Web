<script>
import { IconHome, IconTemp, IconLight, IconGear } from '../components/icons'

export default {
  components: {
    IconHome,
    IconTemp,
    IconLight,
    IconGear
  },

  props: {
    current: {
      type: String
    }
  },

  methods: {
    getColor (menu) {
      return (this.current === menu) ? '#48b6ff' : undefined
    },
    moveTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<template>
  <div class="menu">
    <div class="icons">
      <icon-home @click="moveTo({ name: 'Home' })" :color="getColor('home')" />
      <icon-temp @click="moveTo({ name: 'Temp' })" :color="getColor('temp')" />
      <icon-light @click="moveTo({ name: 'Light' })" :color="getColor('light')" />
      <icon-gear @click="moveTo({ name: 'Settings' })" :color="getColor('gear')" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  width: 100%;
  border: none;
  border-top: 0.5px solid #707070;
  text-align: center;
}

.icons {
  width: 90%;
  display: table;
  margin: auto;

  .icon {
    cursor: pointer;
    display: table-cell;
    width: 20%;
    background: none;
  }
}
</style>
