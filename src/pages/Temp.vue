<script>
import { IconHome, IconTemp, IconLight, IconGear } from '../components/icons'
import AppTitle from '../components/AppTitle'

export default {
  name: 'Index',
  components: {
    AppTitle,
    IconHome,
    IconTemp,
    IconLight,
    IconGear
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    moveTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<template>
  <div class="content">
    <app-title />
    <div class="list">
      <div
        class="none"
        v-if="!list.length"
      >
        <p>아직 보관 중인 물건이 없으시네요?</p>
        <i class="fas fa-plus-circle create"></i>
      </div>
    </div>
    <div class="menu">
      <div class="icons">
        <icon-home @click="moveTo({ name: 'Home' })" />
        <icon-temp @click="moveTo({ name: 'Temp' })" color="#48b6ff" />
        <icon-light @click="moveTo({ name: 'Light' })" />
        <icon-gear @click="moveTo({ name: 'Settings' })" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.none {
  margin-top: 20%;
  color: #606060;
  width: 100%;
  text-align: center;

  @media (max-width: 520px) {
    margin-top: 60%;
  }
}

.list {
  width: 100%;
}

.create {
  font-size: 3em;
  color: #606060;
  margin: auto;
}

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
