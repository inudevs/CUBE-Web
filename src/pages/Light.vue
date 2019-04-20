<script>
import AppTitle from '../components/AppTitle'
import AppMenu from '../components/AppMenu'

export default {
  name: 'Index',
  components: {
    AppTitle,
    AppMenu
  },
  computed: {
    sliderStyle () {
      return {
        background: '#48b6ff',
        'font-family': 'S-CoreDream-5Medium'
      }
    }
  },
  data () {
    return {
      light: 50
    }
  }
}
</script>

<template>
  <div class="content">
    <app-title />
    <div class="light">
      <div class="image">
        <img class="cube" src="../assets/cube.png">
      </div>
      <div class="slider">
        <span class="value">{{ light }}<small>%</small></span>
        <div class="wrap">
          <span class="value-min">0</span>
          <span class="value-max">100</span>
        </div>
        <vue-slider
          v-model="light"
          :height="15"
          :dotSize="18"
          :processStyle="sliderStyle"
          :tooltipStyle="sliderStyle"
        />
      </div>
    </div>
    <app-menu current="light" />
  </div>
</template>

<style lang="scss" scoped>
.light {
  width: 100%;
  padding-top: 1.5em;
  text-align: center;

  .cube {
    width: 40%;
  }

  .slider {
    width: 80%;
    margin: auto;
  }

  .value {
    margin-top: 0.5em;
    font-size: 1.5em;
    display: block;
  }
  
  small {
    font-size: 60%;
  }

  .value-min {
    font-size: 0.5em;
    float: left;
    vertical-align: text-bottom;
    margin-bottom: 0.5em;
  }

  .value-max {
    font-size: 0.5em;
    float: right;
    vertical-align: text-bottom;
  }

  .wrap {
    padding-bottom: 0.5em;
  }
}
</style>
