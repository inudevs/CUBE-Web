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
  <div class="icon" @click="click">
    <svg xmlns="http://www.w3.org/2000/svg" width="16.769" height="20.941" viewBox="0 0 16.769 20.941">
      <g id="그룹_37" data-name="그룹 37" transform="translate(2816 7881)">
        <g id="사각형_60" data-name="사각형 60" transform="translate(-2813.748 -7879.166)" fill="#fff" stroke="#606060" stroke-linecap="round" stroke-width="2">
          <rect width="14.517" height="19.107" stroke="none"/>
          <rect x="1" y="1" width="12.517" height="17.107" fill="none"/>
        </g>
        <g id="사각형_59" data-name="사각형 59" transform="translate(-2816 -7881)" fill="#fff" stroke="#606060" stroke-linecap="round" stroke-width="2">
          <rect width="13.517" height="18.107" stroke="none"/>
          <rect x="1" y="1" width="11.517" height="16.107" fill="none"/>
        </g>
        <line id="선_53" data-name="선 53" x2="7.226" transform="translate(-2812.957 -7876.54)" fill="none" stroke="#606060" stroke-linecap="round" stroke-width="0.8"/>
        <line id="선_54" data-name="선 54" x2="6.226" transform="translate(-2812.957 -7875.288)" fill="none" stroke="#606060" stroke-linecap="round" stroke-width="0.8"/>
        <line id="선_55" data-name="선 55" x2="5.424" transform="translate(-2812.957 -7874.036)" fill="none" stroke="#606060" stroke-linecap="round" stroke-width="0.8"/>
      </g>
    </svg>
  </div>
</template>
