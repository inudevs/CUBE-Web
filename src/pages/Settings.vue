<script>
import AppTitle from '../components/AppTitle'
import AppMenu from '../components/AppMenu'

export default {
  name: 'Index',
  components: {
    AppTitle,
    AppMenu
  },
  data () {
    return {
      user: {
        name: '여준호',
        email: 'jyeo@civar.dev'
      }
    }
  },
  methods: {
    changePassword () {
      return 1
    },
    logout () {
      this.$router.push({ name: 'Intro' })
    }
  }
}
</script>

<template>
  <div class="content">
    <app-title />
    <div class="profile">
      <img src="https://avatars0.githubusercontent.com/u/32605822?s=460">
    </div>
    <div class="about">
      <div class="about__menu">
        <div class="field">이름</div>
        <div class="value">{{ user.name }}</div>
      </div>
      <div class="about__menu">
        <div class="field">이메일</div>
        <div class="value">{{ user.email }}</div>
      </div>
      <div class="about__menu" @click="changePassword">
        <div class="setting">비밀번호 변경</div>
      </div>
      <div class="about__menu" @click="logout">
        <div class="setting">로그아웃</div>
      </div>
    </div>
    <app-menu current="gear" />
  </div>
</template>

<style lang="scss" scoped>
.profile {
  width: 100%;
  text-align: center;
  position: relative;

  img {
    margin: auto;
    margin-top: 1em;
    width: 12%;
    border-radius: 50%;

    @media (max-width: 520px) {
      width: 30%;
    }
  }
}

.about {
  width: 60%;
  margin: auto;
  text-align: left;
  padding: 0.5em;
  font-size: 1em;

  @media (max-width: 520px) {
    width: 90%;
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__menu:not(:last-child) {
    border: none;
    border-bottom: 1px solid rgba(112, 112, 112, 0.23);
  }

  .field, .setting {
    color: #707070;
    padding: 1em;
    display: flex;
    justify-content: flex-start;
  }

  .setting {
    width: 100%;
  }

  .value {
    color: #707070;
    padding: 1em;
    text-align: right;
    justify-content: flex-start;
  }
}
</style>
