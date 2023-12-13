import { createRouter, createWebHistory } from "vue-router";

import MainPage from './pages/MainPage.vue';
import TestPage from './pages/TestPage.vue';

const routes = [
  {
    path: "/",
    name: "placeholder",          //cercare nome best practice
    component: MainPage,
  },
  {
    path: "/testpage",
    name: "testpage",
    component: TestPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export { router };