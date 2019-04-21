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
    },
    rangeStyle () {
      return {
        color: (this.timer) ? 'black' : 'lightgray'
      }
    },
    inputStyle () {
      return {
        'pointer-events': (this.timer) ? 'unset' : 'none',
        color: (this.timer) ? 'black' : 'lightgray'
      }
    }
  },
  data () {
    return {
      light: 50,
      start: {
        hour: 12,
        minute: 30
      },
      end: {
        hour: 19,
        minute: 30
      },
      timer: false
    }
  }
}
</script>

<template>
  <div class="content">
    <app-title title="LIGHT" />
    <div class="light">
      <div class="image">
        <img class="cube" :src="require(`../assets/cube${Math.floor(this.light / 20)}.png`)">
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
    <div class="feature">
      <div class="feature__title">기능</div>
      <div class="setups">
        <div class="setup">
          <div class="field">보호모드</div>
          <div class="value">
            <toggle-button
              :value="false"
              color="#48B6FF"
              :sync="true"
              :labels="true"
            />
          </div>
        </div>
        <div class="setup">
          <div class="field">타이머 설정</div>
          <div class="value">
            <toggle-button
              v-model="timer"
              color="#48B6FF"
              :sync="true"
              :labels="true"
            />
          </div>
          <span class="range" :style="rangeStyle">
            <input v-model.number="start.hour" :style="inputStyle"/>:<input v-model.number="start.minute" :style="inputStyle"/>
             ~
            <input v-model.number="end.hour" :style="inputStyle"/>:<input v-model.number="end.minute" :style="inputStyle"/>
          </span>
        </div>
      </div>
    </div>
    <app-menu current="light" />
  </div>
</template>

<style lang="scss" scoped>
.light {
  width: 100%;
  padding-top: 1em;
  text-align: center;

  .cube {
    width: 80%;
  }

  .slider {
    width: 80%;
    margin: auto;
  }

  .value {
    margin-top: 0.5em;
    font-size: 1.8em;
    display: block;
    font-weight: bold;
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

.feature {
  margin: auto;
  margin-top: 1.5em;
  margin-bottom: 5em;
  text-align: center;

  &__title {
    padding-left: 0.7em;
    margin-bottom: 0.5em;
    text-align: left;
    font-size: 1.3rem;
    // color: #606060;
    color: #505050;
    font-weight: bold;
  }

  .setups {
    margin: auto;
    width: 92%;
    display: table;
    border: 1px solid rgba(112, 112, 112, 0.23);
    border-radius: 8px;
  }

  .setup {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .setup:not(:last-child) {
    border: none;
    border-bottom: 1px solid rgba(112, 112, 112, 0.23);
  }

  .field, .value {
    color: #707070;
    padding: 1em;
    display: flex;
    justify-content: flex-start;
  }
}

.range {
  margin-right: 0.3em;
  margin-bottom: 0.5em;
  width: 99%;
  text-align: right;
  font-size: 2em;

  input {
    text-align: center;
    width: 10%;
    font-size: 1.5rem;
    border: none;
    border-bottom: 1px solid rgba(112, 112, 112, 0.23);
  }
}
</style>
