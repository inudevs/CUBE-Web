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
  z-index: 2;
  position: fixed;
  left: 0;
  bottom: 0;
  padding-top: 0.5em;
  padding-bottom: .5em;
  width: 100vw;
  border: none;
  border-top: 1px solid rgba(112, 112, 112, 0.23);
  text-align: center;
  background: white;
}

.icons {
  display: flex;
  justify-content: center;


  .icon {
    cursor: pointer;
    display: table-cell;
    width: 20%;
    background: none;
  }
}
</style>
