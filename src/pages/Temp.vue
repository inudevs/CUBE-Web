<script>
import AppTitle from '../components/AppTitle'
import AppMenu from '../components/AppMenu'

export default {
  name: 'Index',
  components: {
    AppTitle,
    AppMenu
  },
  data () {
    return {
      list: []
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
    <app-menu current="temp" />
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
</style>
