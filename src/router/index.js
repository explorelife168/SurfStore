import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Home
  {
    path: "/",
    name: "TakayamaHomeView",
    component: () => import("../views/TakayamaHomeView"),
  },
  //SurfBoards
  {
    path: "/SurfBoards",
    name: "SurfBoardView",
    component: () => import("../views/TakayamaSurfBoardView02"),
  },
  // LongBoards
  {
    path: "/SurfBoards/LongBoard",
    name: "LongBoardView",
    component: () => import("../views/TakayamaLongBoardView03"),
  },

  {
    path: "/SurfBoards/LongBoard/DoubleEnder",
    name: "doubelender",
    component: () => import("../views/DoubleEnderView07.vue"),
  },
  {
    path: "/SurfBoards/LongBoard/ModelT",
    name: "modelt",
    component: () => import("../views/TakayamaSurfBoardView-modelt.vue"),
  },
  {
    path: "/SurfBoards/LongBoard/DT2X",
    name: "dt2x",
    component: () => import("../views/DT2XView08.vue"),
  },
  {
    path: "/SurfBoards/LongBoard/Terramar",
    name: "terramar",
    component: () => import("../views/TerramarView09.vue"),
  },
  // Funboards
  {
    path: "/SurfBoards/FunBoard",
    name: "FunBoardView",
    component: () => import("../views/TakayamaFunBoardView04.vue"),
  },
  {
    path: "/SurfBoards/FunBoard/HowardMini",
    name: "HowardMini",
    component: () => import("../views/HowardMiniView10.vue"),
  },
  {
    path: "/SurfBoards/FunBoard/Scorpion",
    name: "ScorPion",
    component: () => import("../views/ScorpionView11.vue"),
  },
  {
    path: "/SurfBoards/FunBoard/StoneSteps",
    name: "StoneSteps",
    component: () => import("../views/StoneStepsView12.vue"),
  },
  {
    path: "/SurfBoards/FunBoard/StoneSteps2",
    name: "StoneSteps2",
    component: () => import("../views/StoneSteps2View13.vue"),
  },
  //ShortBoards
  {
    path: "/SurfBoards/ShortBoard",
    name: "ShortBoardView",
    component: () => import("../views/TakayamaShortBoardView05"),
  },
  {
    path: "/SurfBoards/ShortBoard/HumuFish",
    name: "HunuFIshView",
    component: () => import("../views/HumuFishView14"),
  },
  {
    path: "/SurfBoards/ShortBoard/Scorpion",
    name: "ScorpionView",
    component: () => import("../views/ScorpionView15"),
  },
  {
    path: "/SurfBoards/ShortBoard/Scorpion2",
    name: "Scorpion2View",
    component: () => import("../views/Scorpion2View16"),
  },
  {
    path: "/Fins",
    name: "Fins2View",
    component: () => import("../views/FinsView17"),
  },
  {
    path: "/Fins/MTP",
    name: "MTPView",
    component: () => import("../views/MTPView18"),
  },
  {
    path: "/Fins/RP",
    name: "RPView",
    component: () => import("../views/RPView19"),
  },
  {
    path: "/Fins/RLB",
    name: "RLBView",
    component: () => import("../views/RLBView20"),
  },
  {
    path: "/Fins/DTFLEX",
    name: "DTFLEXView",
    component: () => import("../views/DTFLEXView21"),
  },
  //ACCESSORIES
  {
    path: "/Accessories",
    name: "AccessoriesView",
    component: () => import("../views/AccessoriesView"),
  },
  //CONTACT
  {
    path: "/Contact",
    name: "ContactView",
    component: () => import("../views/ContactView"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
