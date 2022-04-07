<template>
	<h1>ShopHome</h1>
	<p>{{ comments.message }}</p>
	<div>
		<p><router-link to="/products"> PRODUCTS</router-link></p>
		<p><router-link to="/cart"> CART </router-link></p>
	</div>
	<router-view></router-view>
</template>

<script>
import axios from 'axios';

export default {
	name: 'App',
	data() {
		return {
			comments: [],
		};
	},
	mounted() {
		axios
			.get('/api')
			.then((response) => {
				this.comments = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},
};
</script>
