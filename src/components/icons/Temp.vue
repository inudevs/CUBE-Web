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
  <div class="icon temp" @click="click">
    <svg xmlns="http://www.w3.org/2000/svg" width="10.736" height="20.391" viewBox="0 0 10.736 20.391">
      <path id="패스_41" :style="computedStyle" data-name="패스 41" d="M-3019.791-8193.508s-4.431,8.38-4.431,12.582,3.025,4.7,4.36,4.67,4.376-.72,4.376-4.921S-3019.791-8193.508-3019.791-8193.508Z" transform="translate(3025.222 8195.646)" fill="none" stroke="#606060" stroke-width="2"/>
    </svg>
  </div>
</template>
