import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
	state: {
		cart: [],
	},
	// this.$store.state.cart[0].radio
	mutations: {
		update(state, newcart) {
			state.cart.push(newcart);
			console.log(state.cart);
		},

		remove(state) {
			state.cart = [];
		},
	},
	actions: {
		registerCart({ commit }) {
			axios
				.get('/api')
				.then((response) => {
					commit('update', response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
});

export default store;
