import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router';
import {setupLayouts} from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

const history = import.meta.env.VITE_ROUTER_HASH !== 'true' ? createWebHistory() : createWebHashHistory();

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

router.afterEach(() => {
  if (l) {
    l.close();
    l = null;
  }
});

export default router;
