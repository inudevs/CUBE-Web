<script>
import AppTitle from '../components/AppTitle'
import AppMenu from '../components/AppMenu'
import { IconLight } from '../components/icons'

export default {
  name: 'Index',
  components: {
    AppTitle,
    AppMenu,
    IconLight
  },
  data () {
    return {
      loading: true,
      device: {}
    }
  }
}
</script>

<template>
  <div class="content">
    <app-title />
    <div class="main">
      <div
        class="none"
        v-if="!loading"
      >
        <p>아직 보관 중인 물건이 없으시네요?</p>
        <i class="fas fa-plus-circle create"></i>
      </div>
      <div class="device" v-else>
        <div class="device__title">Environment</div>
        <div class="device__env">
          <div class="env-left">
            <div class="env-left__text">현재 주변 환경은</div>
            <div class="env-left__data">
              <div class="env-left__data-cell">
                <div class="env-left__field">온도</div>
                <div class="env-left__value">25°</div>
              </div>
              <div class="env-left__data-cell">
                <div class="env-left__field">습도</div>
                <div class="env-left__value">36%</div>
              </div>
            </div>
          </div>
          <div class="env-right">
            <div class="env-right-top">
              <div class="env-right-top__text">현재 미세먼지는</div>
              <div class="env-right-top__status">위험</div>
              <div class="env-right-top__text">입니다.</div>
            </div>
            <div class="env-right-bottom">
              <icon-light /> 조도 52%
            </div>
          </div>
        </div>
        <div class="device__title">Information</div>
        <div class="device__info">
          <p>빗살무늬토기는 그릇 표면을 눌러 기하학적 무늬를 나타낸 신석기시대의 대표적인 토기이다.</p>
        </div>
        <div class="device__title">Notice</div>
        <div class="notice">
          <div class="notice__menu">
            <div class="field">온도</div>
            <div class="value">
              <toggle-button
                :value="false"
                color="#82C7EB"
                :sync="true"
                :labels="true"
              />
            </div>
          </div>
          <div class="notice__menu">
            <div class="field">습도</div>
            <div class="value">
              <toggle-button
                :value="false"
                color="#82C7EB"
                :sync="true"
                :labels="true"
              />
            </div>
          </div>
          <div class="notice__menu">
            <div class="field">조도</div>
            <div class="value">
              <toggle-button
                :value="false"
                color="#82C7EB"
                :sync="true"
                :labels="true"
              />
            </div>
          </div>
          <div class="notice__menu">
            <div class="field">미세먼지</div>
            <div class="value">
              <toggle-button
                :value="false"
                color="#82C7EB"
                :sync="true"
                :labels="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-menu current="home" />
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

.main {
  width: 100%;
  text-align: center;
}

.create {
  font-size: 3em;
  color: #606060;
  margin: auto;
}

.device {
  margin: auto;
  width: 60%;

  @media (max-width: 520px) {
    width: 90%;
  }

  &__title {
    text-align: left;
    font-size: 1.3em;
    color: #606060;
  }

  &__title:not(:first-child) {
    margin-top: 0.2em;
  }

  &__env {
    color: #606060;
    width: 100%;
    display: table;
    border-spacing: 0.5em;
    margin-top: -0.3em; // set top border spacing to 0.2em
  }

  .env-left {
    margin: 0.5em;
    display: table-cell;
    border: 1px solid rgba(112, 112, 112, 0.23);
    border-radius: 8px;
  }

  .env-right {
    margin: 0.5em;
    display: table-cell;
  }

  &__info {
    width: 100%;
    height: 3em;
    border: 1px solid rgba(112, 112, 112, 0.23);
    border-radius: 8px;
    margin-top: 0.2em;
    margin-bottom: 0.6em;
  }

  &__info p {
    color: #707070;
    margin: 0;
    padding: 0;
    padding: 0.5em;
    font-size: 0.8em;
    text-align: left;
  }
}

.env-left {
  width: 60%;
  padding: 0.5em;
  text-align: left;

  &__text {
    font-size: 0.8rem;
  }

  &__data {
    margin-top: 1em;
  }

  &__data-cell {
    margin-top: 0.5em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__data-cell:not(:last-child) {
    border: none;
    border-bottom: 1px solid rgba(112, 112, 112, 0.23);
  }

  &__field, &__value {
    display: flex;
    justify-content: flex-start;
    font-size: 0.8em;
  }

  &__value {
    font-size: 2em;
  }
}

.env-right-top {
  padding: 0.5em;
  border: 1px solid rgba(112, 112, 112, 0.23);
  border-radius: 8px;

  &__text {
    font-size: 0.8rem;
  }

  &__status {
    font-size: 2rem;
    margin: 0.3em;
    color: #ff3d00; // todo
  }
}

.env-right-bottom {
  margin-top: 0.3em;
  padding: 0.5em;
  border: 1px solid rgba(112, 112, 112, 0.23);
  border-radius: 8px;

  .icon {
    display: inline-block;
    vertical-align: middle;
  }
}

.notice {
  margin-top: 0.2em;
  padding: 0.5em;
  border: 1px solid rgba(112, 112, 112, 0.23);
  border-radius: 8px;

  &__menu {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__menu:not(:last-child) {
    border: none;
    border-bottom: 1px solid rgba(112, 112, 112, 0.23);
  }

  .field {
    color: #707070;
    padding: 0.8em;
    display: flex;
    justify-content: flex-start;
  }

  .value {
    padding: 0.6em;
    text-align: right;
    justify-content: flex-start;
  }
}
</style>
