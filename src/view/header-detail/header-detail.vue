<template>
  <transition name="fade">
    <div v-show="visible" class="header-detail">
      <div class="detail-wrapper clear-fix">
        <div class="detail-main">
          <h1 class="name">{{ seller.name }}</h1>
          <div class="star-wrapper">
            <Star :size="48" :score="seller.score" />
          </div>

          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li
              v-for="support in seller.supports"
              :key="support.id"
              class="support-item"
            >
              <SupportIco :size="2" :type="support.type" />
              <span class="text">{{ support.description }}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{ seller.bulletin }}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="setVisible">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import SupportIco from '../../components/support-ico/support-ico.vue'
import Star from '../../components/star/star.vue'

export default {
  name: 'header-detail',
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    setVisible() {
      this.visible = !this.visible
    },
  },
  components: {
    SupportIco,
    Star,
  },
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/variable';
@import '../../common/stylus/mixin';

.header-detail {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(10px);
  opacity: 1;
  background-color: $color-background-s;
  color: $color-white;

  &.fade-enter-active, &.fade-leave-active {
    transition: all 0.5s;
  }

  &.fade-enter, &.fade-leave-to {
    opacity: 0;
  }

  .detail-wrapper {
    display: inline-block;
    width: 100%;
    min-height: 100%;

    .detail-main {
      margin-top: 64px;
      padding-bottom: 64px;

      .name {
        text-align: center;
        font-size: $fontsize-large;
        font-weight: 700;
        line-height: 16px;
      }

      .star-wrapper {
        margin-top: 18px;
        padding: 2px 0;
        text-align: center;
      }

      .title {
        display: flex;
        width: 80%;
        margin: 28px auto 24px auto;

        .line {
          position: relative;
          flex: 1;
          top: -6px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .text {
          padding: 0 12px;
          font-weight: 700;
          font-size: $fontsize-medium;
        }
      }
    }

    .supports {
      width: 80%;
      margin: 0 auto;

      .support-item {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        padding: 0 12px;

        .support-ico {
          margin-right: 6px;
        }

        .text {
          line-height: 16px;
          font-size: $fontsize-small;
        }
      }
    }

    .bulletin {
      margin: 0 auto;
      width: 80%;

      .content {
        font-size: 12px;
        padding: 0 12px;
        line-height: 24px;
      }
    }
  }

  .detail-close {
    position: relative;
    width: 30px;
    height: 30px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: $fontsize-large-xxxx;
  }
}
</style>
