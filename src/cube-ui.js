import Vue from "vue";

// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  TabBar,
  Popup,
  Dialog,
  Scroll,
  Slide,
  ScrollNav,
  ScrollNavBar,
} from "cube-ui";

// 性能优化去除不必要的组件
Vue.use(TabBar);
Vue.use(Popup);
Vue.use(Dialog);
Vue.use(Scroll);
Vue.use(Slide);
Vue.use(ScrollNav);
Vue.use(ScrollNavBar);
