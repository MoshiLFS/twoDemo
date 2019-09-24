import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Recommend from './views/home/recommend/index.vue'
import FamilyLife from './views/home/familtLife/index.vue'
import Clothes from './views/home/clothes/index.vue'
import FoodBeverage from './views/home/foodBeverage/index.vue'
import HouseholdCleaning from './views/home/householdCleaning/index.vue'
import Maternal from './views/home/maternal/index.vue'
import SportsTravel from './views/home/sportsTravel/index.vue'
import Diital from './views/home/diital/index.vue'
import GlobalFeature from './views/home/globalFeature/index.vue'

import MHome from './views/home/index.vue'
import Personage from './views/personage/index.vue'
import Classfiy from './views/classfiy/index.vue'
import GeneralThings from './views/generalThings/index.vue'
import ShoppingTrolley from './views/shoppingTrolley/index.vue'
import Login from './views/login/index.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/home', component: MHome,},
    {path: '/home/recommend', component: Recommend },//推荐
    {path: '/home/familtLife', component: FamilyLife},//居家生活
    {path: '/home/clothes', component: Clothes},//服饰鞋包
    {path: '/home/foodBeverage', component: FoodBeverage},//美食酒水
    {path: '/home/householdCleaning', component: HouseholdCleaning},//个户清洁
    {path: '/home/maternal ', component: Maternal},//母婴亲子
    {path: '/home/sportsTravel', component: SportsTravel},//运动旅行
    {path: '/home/diital', component: Diital},//数码家电
    {path: '/home/globalFeature', component: GlobalFeature},//全球特色
    {path: '/login', component: Login}, //登录页
    {path: '/personage', component: Personage},  // 个人
    {path: '/classfiy', component: Classfiy}, // 分类
    {path: '/generalThings', component: GeneralThings}, //识物
    {path: '/shoppingTrolley', component: ShoppingTrolley}, //购物车
    {path: '/', redirect: '/home/recommend'},// 重定向
  ]
})
