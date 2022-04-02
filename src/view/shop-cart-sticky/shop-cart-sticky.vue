<template>
  <div class="shop-cart-sticky" v-show="visible">
    <ShopCart
      :selectFoods="selectFoods"
      :minPrice="minPrice"
      :deliveryPrice="deliveryPrice"
      :fold="fold"
      :sticky="true"
    />
  </div>
</template>

<script>
import ShopCart from '../shop-cart/shop-cart'

/**
 * 1. 点击出现多个状态不正常的 sticky
 *    先把 fold 从 create 转到 props
 *    把 shop-cart的引用转入 sticky
 *    区分 sticky 和原 shop-cart
 * 2. 解决换组件sticky销毁
 *    隐藏时候sticky也隐藏
 * 3. 点击出现多个状态正常的sticky
 */
export default {
  name: 'shop-cart-sticky',
  props: {
    selectFoods: {
      type: Array,
      default() {
        return []
      },
    },
    deliveryPrice: {
      type: Number,
      default: 0,
    },
    minPrice: {
      type: Number,
      default: 0,
    },
    fold: {
      // 解决 create 出来的 fold状态一直是true， 导致多次点击会出现多个不正常的sticky
      type: Boolean,
      default: true,
    },
    list: {
      // sticky和原shopcart引用同一个shop-cart-list
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
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
  },
  components: {
    ShopCart,
  },
}
</script>

<style lang="stylus" scoped>
.shop-cart-sticky {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 48px;
}
</style>
