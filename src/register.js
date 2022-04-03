import { createAPI } from "cube-ui";
import Vue from "vue";
import HeaderDetail from "./view/header-detail/header-detail.vue";
import ShopCartList from "./view/shop-cart-list/shop-cart-list.vue";
import ShopCartSticky from "./view/shop-cart-sticky/shop-cart-sticky.vue";
import Food from "./view/food/food";

createAPI(Vue, HeaderDetail);
createAPI(Vue, ShopCartList);
createAPI(Vue, ShopCartSticky);
createAPI(Vue, Food);
