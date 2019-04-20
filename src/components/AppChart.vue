<script>
import LineChart from './LineChart.js'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: {},
      options: {
        scales: {
          yAxes: [{
            ticks: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
            title: () => null
          }
        }
      }
    }
  },
  mounted () {
    this.fillData()
  },
  props: {
    labels: {
      type: Array
    },
    temp: {
      type: Array
    },
    humi: {
      type: Array
    }
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: this.labels,
        datasets: [
          {
            label: '온도',
            borderColor: '#48b6ff',
            backgroundColor: '#48b6ff',
            data: this.temp,
            fill: false
          }, {
            label: '습도',
            borderColor: '#707070',
            backgroundColor: '#707070',
            data: this.humi,
            fill: false
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<template>
  <div class="chart">
    <line-chart :height="150" :chart-data="datacollection" :options="options"></line-chart>
  </div>
</template>

<style lang="scss">
</style>
