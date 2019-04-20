<script>
export default {
  props: {
    color: {
      type: String,
      default: '#606060'
    }
  },
  computed: {
    computedStyle () {
      return {
        stroke: this.color + ' !important'
      }
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<template>
  <div class="icon home" @click="click">
    <svg xmlns="http://www.w3.org/2000/svg" width="16.935" height="19.195" viewBox="0 0 16.935 19.195">
      <path :style="computedStyle" id="빼기_7" data-name="빼기 7" d="M5.142,17.195H0V6.689L7.576,0l7.359,6.689V17.194H9.888V10.587H5.142v6.607Z" transform="translate(1 1)" fill="none" stroke="#606060" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
    </svg>
  </div>
</template>
