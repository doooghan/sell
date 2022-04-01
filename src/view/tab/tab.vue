<template>
  <div class="tab">
    <cube-tab-bar
      :showSlider="true"
      :use-transition="false"
      v-model="selectedLabel"
      :data="tabs"
      ref="tabBar"
    >
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop="false"
        :auto-play="false"
        :show-dots="false"
        :initial-index="index"
        @change="onChange"
        :options="options"
        @scroll="onScroll"
        ref="slide"
      >
        <cube-slide-item v-for="(tab, index) in tabs" :key="index">
          <components :is="tab.component" :data="tab.data"></components>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
    initialIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      index: this.initialIndex,
      options: {
        //配置可监听scroll事件
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0, // 单方面的滚动
      },
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newVal) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === newVal
        })
      },
    },
  },
  methods: {
    onChange(current) {
      this.index = current
    },
    onScroll(pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = (-pos.x / slideWidth) * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    },
  },
}
</script>

<style lang="stylus" scoped>
.tab {
  display: flex;
  flex-direction: column;
  height: 100%;

  >>> .cube-tab {
    padding: 10px 0;
  }

  .slide-wrapper {
    flex: 1;
    overflow: hidden;
  }
}
</style>
