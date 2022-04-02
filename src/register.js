import { createAPI } from "cube-ui";
import Vue from "vue";
import HeaderDetail from "./view/header-detail/header-detail.vue";
import ShopCartList from "./view/shop-cart-list/shop-cart-list.vue";

createAPI(Vue, HeaderDetail);
createAPI(Vue, ShopCartList);
