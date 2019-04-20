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
        { time: '05:00', temp: 25, humi: 23 },
        { time: '06:00', temp: 22, humi: 24 },
        { time: '07:00', temp: 23, humi: 25 },
        { time: '08:00', temp: 24, humi: 19 },
        { time: '09:00', temp: 28, humi: 20 },
        { time: '10:00', temp: 21, humi: 29 },
        { time: '11:00', temp: 20, humi: 20 }
      ]
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
    <app-title />
    <div class="temp">
      <app-chart
        :labels="mapData('time')"
        :temp="mapData('temp')"
        :humi="mapData('humi')"
      />
      <div class="temp__data">
        <div
          class="temp__data-cell"
          v-for="(item, idx) in data.slice(-3)"
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
    </div>
    <app-menu current="temp" />
  </div>
</template>

<style lang="scss" scoped>
.temp {
  padding: 0.5em;

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
</style>
