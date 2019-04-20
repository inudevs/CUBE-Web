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
    <svg xmlns="http://www.w3.org/2000/svg" width="21.818" height="21.818" viewBox="0 0 21.818 21.818">
      <g id="그룹_40" data-name="그룹 40" transform="translate(-264.586 -111.889)">
        <g id="타원_46" data-name="타원 46" transform="translate(280.402 117.904) rotate(90)" fill="none" stroke="#606060" stroke-width="2" :style="computedStyle">
          <circle cx="4.894" cy="4.894" r="4.894" stroke="none"/>
          <circle cx="4.894" cy="4.894" r="3.894" fill="none"/>
        </g>
        <line id="선_30" data-name="선 30" y2="3.705" transform="translate(285.404 122.958) rotate(90)" fill="none" stroke="#606060" :style="computedStyle" stroke-linecap="round" stroke-width="2"/>
        <line id="선_31" data-name="선 31" y2="3.705" transform="translate(269.29 122.958) rotate(90)" fill="none" stroke="#606060" :style="computedStyle" stroke-linecap="round" stroke-width="2"/>
        <line id="선_30-2" data-name="선 30" y2="3.705" transform="translate(275.335 132.707) rotate(180)" fill="none" stroke="#606060" :style="computedStyle" stroke-linecap="round" stroke-width="2"/>
        <line id="선_31-2" data-name="선 31" y2="3.705" transform="translate(275.335 116.594) rotate(180)" fill="none" stroke="#606060" :style="computedStyle" stroke-linecap="round" stroke-width="2"/>
        <line id="선_30-3" data-name="선 30" y2="3.705" transform="translate(282.389 129.918) rotate(135)" fill="none" stroke="#606060" :style="computedStyle" stroke-linecap="round" stroke-width="2"/>
        <line id="선_31-3" data-name="선 31" y2="3.705" transform="translate(270.995 118.524) rotate(135)" fill="none" stroke="#606060" :style="computedStyle" stroke-linecap="round" stroke-width="2"/>
        <line id="선_30-4" data-name="선 30" y2="3.705" transform="translate(268.375 129.692) rotate(-135)" fill="none" stroke="#606060" :style="computedStyle" stroke-linecap="round" stroke-width="2"/>
        <line id="선_31-4" data-name="선 31" y2="3.705" transform="translate(279.769 118.298) rotate(-135)" fill="none" stroke="#606060" :style="computedStyle" stroke-linecap="round" stroke-width="2"/>
      </g>
    </svg>
  </div>
</template>
