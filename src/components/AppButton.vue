<script>
export default {
  name: 'AppButton',
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    border: {
      type: String
    },
    background: {
      type: String
    },
    href: {
      type: String,
      default: undefined
    }
  },

  computed: {
    computedStyle () {
      return {
        'color': (this.color) ? this.color : 'white',
        'border-color': (this.border) ? this.border : 'white',
        'background-color': (this.background) ? this.background : 'transparent'
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
  <a
    v-ripple="'rgba(255, 255, 255, .2)'"
    class="button"
    :style="computedStyle"
    :href="href"
    @click="click"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.button {
  display: block;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 0.8em 2.7em;
  appearance: none;
  border: 3px solid white;
  border-radius: 2rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s background-color ease;
  user-select: none;
  white-space: nowrap;
  text-align: center;
  font-size: 1rem;
}
</style>
