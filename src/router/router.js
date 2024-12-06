import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '../page/HomePage.vue'
import CatalogPage from '../page/CatalogPage.vue'
import ProductPage from '../page/ProductPage.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/catalog', component: CatalogPage },
    { path: '/product', component: ProductPage },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes
})