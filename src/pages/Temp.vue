<script>
import AppTitle from '../components/AppTitle'
import AppMenu from '../components/AppMenu'
import AppChart from '../components/AppChart'

export default {
  name: 'Index',
  components: {
    AppTitle,
    AppMenu,
    AppChart
  },
  data () {
    return {
      data: [
        { time: '04:31', temp: 25, humi: 21 },
        { time: '05:00', temp: 25, humi: 29 },
        { time: '05:30', temp: 30, humi: 24 },
        { time: '06:01', temp: 19, humi: 25 },
        { time: '06:29', temp: 22, humi: 19 },
        { time: '07:00', temp: 28, humi: 20 }
      ],
      temp: {
        minRange: 18,
        maxRange: 25
      },
      humi: {
        minRange: 15,
        maxRange: 30
      }
    }
  },
  methods: {
    mapData (key) {
      return this.data.map(item => item[key])
    }
  }
}
</script>

<template>
  <div class="content">
    <app-title title="STATUS" />
    <div class="temp">
      <app-chart
        :labels="mapData('time')"
        :temp="mapData('temp')"
        :humi="mapData('humi')"
      />
      <div class="temp__data">
        <div
          class="temp__data-cell"
          v-for="(item, idx) in data.slice(-4)"
          :key="idx"
        >
          <div class="field">{{ item.time }}</div>
          <div class="value">
            <span class="temp">{{ item.temp }}°</span>
            <span class="humi">{{ item.humi }}%
            </span>
          </div>
        </div>
      </div>
      <div class="setups">
        <div class="setup">
          <span class="setup__title">온도 범위 설정</span>
          <span class="setup__range">
            <input v-model.number="temp.minRange"/>° ~ <input v-model.number="temp.maxRange"/>°
          </span>
        </div>
        <div class="setup">
          <span class="setup__title">습도 범위 설정</span>
          <span class="setup__range">
            <input v-model.number="humi.minRange"/>% ~ <input v-model.number="humi.maxRange"/>%
          </span>
        </div>
      </div>
    </div>
    <app-menu current="temp" />
  </div>
</template>

<style lang="scss" scoped>
.temp {
  padding: 0.8em;

  &__data-cell {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__data-cell:not(:last-child) {
    border: none;
    border-bottom: 1px solid rgba(112, 112, 112, 0.23);
  }

  .field {
    color: #a7a7a7;
    padding: 0.8em;
    font-size: 1.2em;
    display: flex;
    justify-content: flex-start;
  }

  &__data-cell:last-child .field,
  &__data-cell:last-child .value {
    color: #060606;
  }

  .value {
    color: #a7a7a7;
    padding: 0.8em;
    font-size: 1.2em;
    text-align: right;
    justify-content: flex-start;
  }
}

.setups {
  color: #707070;
  display: table;
  margin-bottom: 5em;
  width: 92%;
  border: 1px solid rgba(112, 112, 112, 0.23);
  border-radius: 8px;
  margin: auto;
  text-align: left;
  padding: 0.5em;
  font-size: 1em;
  border-spacing: 0.8em;
}

.setup {
  display: table-row;

  &__range {
    padding-left: 4em;
    font-size: 1.2em;
  }

  input {
    text-align: center;
    width: 10%;
    font-size: 1.3rem;
    border: none;
    border-bottom: 1px solid rgba(112, 112, 112, 0.23);
  }
}
</style>
