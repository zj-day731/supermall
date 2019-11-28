import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Prevalent = () => import('views/home/tabList/Prevalent')
const NewStyle = () => import('views/home/tabList/NewStyle')
const Choice = () => import('views/home/tabList/Choice')

const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopcar/ShopCart')
const Profile = () => import('views/profile/Profile')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    // children: [
    //   {
    //     path: '',
    //     redirect: 'prevalent'
    //   },
    //   {
    //     path: 'prevalent',
    //     component: Prevalent
    //   },
    //   {
    //     path: 'newstyle',
    //     component: NewStyle
    //   },
    //   {
    //     path: 'choice',
    //     component: Choice
    //   }
    // ],
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
