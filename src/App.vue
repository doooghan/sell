<template>
  <div id="app">
    <VHeader :seller="seller" />
    <div class="tab-wrapper">
      <Tab :tabs="tabs" />
    </div>
  </div>
</template>

<script>
import VHeader from './view/v-header/v-header.vue'
import Tab from './view/tab/tab.vue'
import Goods from './view/goods/goods.vue'
import Ratings from './view/ratings/ratings.vue'
import Seller from './view/seller/seller.vue'
import { getSeller } from './api/index'
import qs from 'query-string'

export default {
  name: 'App',
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id,
      },
    }
  },
  computed: {
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller,
          },
        },
        {
          label: '评论',
          component: Ratings,
          data: {
            seller: this.seller,
          },
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller,
          },
        },
      ]
    },
  },
  created() {
    this._getSeller()
  },
  methods: {
    async _getSeller() {
      const seller = await getSeller({ id: this.seller.id })
      this.seller = { ...this.seller, ...seller }
    },
  },
  components: {
    VHeader,
    Tab,
  },
}
</script>

<style lang="stylus">
#app {
  .tab-wrapper {
    position: fixed;
    top: 136px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
