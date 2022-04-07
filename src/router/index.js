import { createRouter, createWebHistory } from 'vue-router';

import ShopProduct from '@/view/ShopProducts.vue';
import ProductDetails from '@/view/ProductDetails.vue';
import ProductCart from '@/view/ProductCart.vue';

const routes = [
	//{path:'/', component:App},
	{ path: '/products', component: ShopProduct },
	{ path: '/products/:productId', component: ProductDetails, props: true },
	{ path: '/cart', component: ProductCart },
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
