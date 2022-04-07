<template>
	<h3>Details</h3>
	<h3>{{ comments.productId }}</h3>
	<h3>{{ comments.productName }}</h3>
	<h3><img :src="comments.image" class="imgFile" /></h3>
	<input
		type="radio"
		checked="checked"
		value="매일"
		name="product"
		v-model="radio"
	/>매일
	<input type="radio" name="product" value="주 1회" v-model="radio" />주 1회
	<input type="radio" name="product" value="격주 1회" v-model="radio" />격주
	1회 <input type="radio" name="product" value="월 1회" v-model="radio" />월
	1회 <br />
	<input type="text" name="product" v-model="count" />
	<button @click="input()">담기</button>
</template>

<script>
import axios from 'axios';

export default {
	name: 'ProductDetails',
	props: ['productId'],
	data() {
		return {
			comments: '',
			radio: '',
			count: '',
		};
	},
	methods: {
		input() {
			this.$store.commit('update', {
				comments: this.comments,
				radio: this.radio,
				count: this.count,
			});
		},
	},

	mounted() {
		axios
			.get('/api/products/' + this.productId)
			.then((response) => {
				this.comments = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	},
	computed: {
		productName() {
			if (this.productId == 'p1') return 'p1';
			else if (this.productId == 'p2') return 'p2';
			else if (this.productId == 'p3') return 'p3';
			else if (this.productId == 'p4') return 'p4';
			else return '';
		},
	},
};
</script>
<style scoped>
.imgFile {
	width: 100px;
	height: 100px;
}
</style>
