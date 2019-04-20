<script>
import AppHeader from '../components/AppHeader'
import AppButton from '../components/AppButton'

export default {
  name: 'Login',

  components: {
    AppHeader,
    AppButton
  },

  data () {
    return {
      email: '',
      password: '',
      name: ''
    }
  },

  methods: {
    register () {
      const registerData = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      console.log(registerData)
      this.$api.post('/create/user', registerData)
        .then((res) => {
          // eslint-disable-next-line
          window.console.log(res)
          if (res.status === 200) {
            this.$swal('가입 성공!', '이제 로그인을 해 주세요.', 'success')
            this.$router.push({ name: 'Login' })
          } else {
            this.$swal('에러!', '가입 중 에러가 발생했어요.', 'error')
          }
        })
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="header">
      <app-header title="JOIN" />
    </div>
    <div class="form">
      <div class="form__field">
        <span class="name">이메일 주소</span>
        <input class="input" v-model.trim="email"/>
      </div>
      <div class="form__field">
        <span class="name">비밀번호</span>
        <input class="input" type="password" v-model.trim="password"/>
      </div>
      <div class="form__field">
        <span class="name">이름</span>
        <input class="input" v-model.trim="name"/>
      </div>
      <div class="button-wrap">
        <app-button
          color="#48B6FF"
          border="#48B6FF"
          background="white"
          @click="register"
        >
          회원가입
        </app-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  text-align: center;

  &__field {
    margin: auto;
    padding: 1em;
    text-align: left;
  }

  .name {
    color: #606060;
    font-size: 1em;
    display: block;
  }

  .input {
    color: #606060;
    font-size: 1.5em;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1.2px solid #707070;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
  }
}

.button {
  width: 40%;
  margin: auto;
  margin-top: 1em;
  font-size: 1em;

  @media (max-width: 500px) {
    width: 12em;
  }
}

.button-wrap {
  position: absolute;
  left: 0;
  bottom: 3em;
  width: 100%;

  @media (max-width: 500px) {
    bottom: 1.8em;
  }
}
</style>
