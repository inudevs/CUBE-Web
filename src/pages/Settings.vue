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
  }
}
</script>

<template>
  <div class="content">
    <app-title />
    <div class="profile">
      <img src="https://avatars0.githubusercontent.com/u/32605822?s=460">
      <div class="about">
        <div class="about__menu">
          <div class="field">이름</div>
          <div class="value">{{ user.name }}</div>
        </div>
        <div class="about__menu">
          <div class="field">이메일</div>
          <div class="value">{{ user.email }}</div>
        </div>
        <div class="about__menu">
          <div class="setting">비밀번호 변경</div>
        </div>
        <div class="about__menu">
          <div class="setting">로그아웃</div>
        </div>
      </div>
    </div>
    <app-menu current="gear" />
  </div>
</template>

<style lang="scss" scoped>
.none {
  margin-top: 20%;
  color: #606060;
  width: 100%;
  text-align: center;

  @media (max-width: 520px) {
    margin-top: 60%;
  }
}

.profile {
  img {
    width: 12%;
    border-radius: 50%;

    @media (max-width: 520px) {
      width: 30%;
    }
  }
}
</style>
