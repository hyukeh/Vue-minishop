<template>
	<h1>Cart</h1>
	<div v-for="cart in $store.state.cart" :key="cart.id">
		<img :src="cart.comments.image" class="imgFile" /> <br />
		제품 이름 : {{ cart.comments.productName }} <br />
		가격 : {{ cart.comments.price }} <br />
		배송 주기 : {{ cart.radio }} <br />
		회당 수량 : {{ cart.count }} <br />
	</div>

	<div>
		<button @click="order()">주문하기</button>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'ProductCart',
	props: ['productId'],
	data() {
		return {
			comments: '',
			radio: '',
			count: '',
		};
	},
	methods: {
		order() {
			this.$store.commit('remove', {
				comments: this.comments,
				radio: this.radio,
				count: this.count,
			});
		},
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
	computed: {},
};
</script>
<style scoped>
.imgFile {
	width: 100px;
	height: 100px;
}
</style>
