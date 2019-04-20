<script>
import AppButton from '../components/AppButton'

export default {
  name: 'Intro',
  components: {
    AppButton
  },
  methods: {
    getLink (path) {
      return this.$router.resolve(path).href
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="logo">
      <img src="../assets/logo.png" draggable="false">
      <span class="logo__title">CUBE</span>
      <span class="logo__desc">당신의 소중함을 보관하다</span>
    </div>
    <div class="buttons">
      <app-button
        color="#48B6FF"
        border="white"
        background="white"
        :href="getLink({ name: 'Login' })"
      >
        로그인
      </app-button>
      <app-button
        color="white"
        border="white"
        background="transparent"
        :href="getLink({ name: 'Register' })"
      >
        회원가입
      </app-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  background: linear-gradient(135deg, #BFEBFF, #48B6FF);
}

.button {
  width: 40%;
  margin: auto;
  margin-top: 1em;
  font-size: 1em;

  @media (max-width: 700px) {
    width: 12em;
  }
}

.logo * {
  user-select: none;
}

.logo {
  width: 100%;
  text-align: center;
  margin: auto;
  margin-top: 7em;
  font-size: 1.5em;

  @media (max-width: 700px) {
    font-size: 1.3em;
    margin-top: 7.2em;

    img {
      width: 2.5em;
    }
  }

  img {
    width: 5em;
    display: block;
    margin: auto;
  }

  &__title {
    display: block;
    font-family: 'arista-20-regular';
    color: white;
    font-size: 3em;
  }

  &__desc {
    color: white;
    font-size: 0.5em;
  }
}

.buttons {
  position: absolute;
  left: 0;
  bottom: 3em;
  width: 100%;

  @media (max-width: 700px) {
    bottom: 1.8em;
  }
}
</style>
