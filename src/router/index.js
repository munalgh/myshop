import { createWebHistory, createRouter } from 'vue-router'
import Home from '/src/views/Home.vue'
import ProductList from '/src/views/ProductList.vue'
import ProductDetail from '/src/views/ProductDetail.vue'
import About from '/src/views/About.vue'
import Stores from '/src/views/Stores.vue'
import Blog from '/src/views/Blog.vue'
import BlogDetails from '/src/views/BlogDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/productlist', name: 'ProductList', component: ProductList },
    { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
    { path: '/about', name: 'About', component: About },
    { path: '/stores', name: 'Stores', component: Stores },
    { path: '/blog', name: 'Blog', component: Blog },
    { path: '/blog/:id', name: 'BlogDetails', component: BlogDetails, props: true }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router