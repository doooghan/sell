import { createAPI } from "cube-ui";
import Vue from "vue";
import HeaderDetail from "./view/header-detail/header-detail.vue";
import ShopCartList from "./view/shop-cart-list/shop-cart-list.vue";
import ShopCartSticky from "./view/shop-cart-sticky/shop-cart-sticky.vue";

createAPI(Vue, HeaderDetail);
createAPI(Vue, ShopCartList);
createAPI(Vue, ShopCartSticky);
