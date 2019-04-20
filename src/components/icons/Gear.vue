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
        stroke: this.color + ' !important',
        fill: this.color + ' !important'
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
    <svg xmlns="http://www.w3.org/2000/svg" width="19.63" height="19.631" viewBox="0 0 19.63 19.631">
      <g id="그룹_41" data-name="그룹 41" transform="translate(-313 -55.369)">
        <g id="타원_19" data-name="타원 19" transform="translate(315.265 57.634)" fill="#707070" stroke="#707070" stroke-width="2" :style="computedStyle">
          <circle cx="7.55" cy="7.55" r="7.55" stroke="none"/>
          <circle cx="7.55" cy="7.55" r="6.55" fill="none"/>
        </g>
        <circle id="타원_20" data-name="타원 20" cx="5.02" cy="5.02" r="5.02" transform="translate(317.795 60.164)" fill="#fff"/>
        <rect id="사각형_38" data-name="사각형 38" width="2.643" height="3.398" rx="1" transform="translate(321.683 55.369)" fill="#707070" :style="computedStyle"/>
        <rect id="사각형_39" data-name="사각형 39" width="2.643" height="3.775" rx="1" transform="translate(328.909 57.489) rotate(45)" fill="#707070" :style="computedStyle"/>
        <rect id="사각형_40" data-name="사각형 40" width="2.643" height="4.153" rx="1" transform="translate(332.63 64.052) rotate(90)" fill="#707070" :style="computedStyle"/>
        <rect id="사각형_41" data-name="사각형 41" width="2.643" height="3.398" rx="1" transform="translate(330.511 71.278) rotate(135)" fill="#707070" :style="computedStyle"/>
        <rect id="사각형_42" data-name="사각형 42" width="2.643" height="3.775" rx="1" transform="translate(323.948 75) rotate(180)" fill="#707070" :style="computedStyle"/>
        <g id="패스_4" data-name="패스 4" transform="translate(327.349 71.328) rotate(-135)" fill="none" :style="computedStyle">
          <path d="M0,1.2Z" stroke="none"/>
          <path d="M 1.045676488242242e-14 1.430511474609375e-06 L 1.045676488242242e-14 2.407465219497681 L 1.045676488242242e-14 1.430511474609375e-06 Z" stroke="none" fill="#707070" :style="computedStyle"/>
        </g>
        <rect id="사각형_43" data-name="사각형 43" width="2.643" height="3.02" rx="1" transform="translate(316.721 72.88) rotate(-135)" fill="#707070" :style="computedStyle"/>
        <rect id="사각형_44" data-name="사각형 44" width="2.643" height="3.775" rx="1" transform="translate(313 66.316) rotate(-90)" fill="#707070" :style="computedStyle"/>
        <rect id="사각형_45" data-name="사각형 45" width="2.643" height="3.398" rx="1" transform="translate(315.12 59.091) rotate(-45)" fill="#707070" :style="computedStyle"/>
      </g>
    </svg>
  </div>
</template>
