import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: CatalogView,
        },
        {
            path: '/product',
            name: 'product',
            component: ProductView,
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView,
        },
    ],
})

export default router
