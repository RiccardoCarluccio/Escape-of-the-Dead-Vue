import { createRouter, createWebHistory } from "vue-router";

import MainPage from './pages/MainPage.vue';
import TestPage from './pages/TestPage.vue';
import testpageV2 from './pages/TestpageV2.vue';

const routes = [
  {
    path: "/escape-of-the-dead",
    name: "mainpage",
    component: MainPage,
  },
  {
    path: "/testpage",
    name: "testpage",
    component: TestPage,
  },
  {
    path: "/testpageV2",
    name: "testpageV2",
    component: testpageV2,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };