import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import {setupLayouts} from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

const {BASE_URL, VITE_ROUTER_HASH} = import.meta.env;

const history = VITE_ROUTER_HASH ? createWebHashHistory(BASE_URL) : createWebHistory(BASE_URL);

const router = createRouter({
  history,
  routes: setupLayouts(generatedRoutes),
  // scrollBehavior() {
  //   return {top: 0};
  // },
});

let l = null;
router.beforeEach((to, from, next) => {
  l = $loading();
  next();
});

// router.beforeResolve(async (to) => {
// });

const originTitle = document.title;
router.afterEach((to) => {
  document.title = to.name + ' - ' + originTitle;
  if (l) {
    l();
    l = null;
  }
});

export default router;
